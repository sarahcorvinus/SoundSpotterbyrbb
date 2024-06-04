import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard, TouchableWithoutFeedback  } from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';
import * as Location from 'expo-location';

const eventLocations = {
  'Rock am Ring': { latitude: 50.941357, longitude: 6.958307 },
  'Jazz Festival': { latitude: 52.516274, longitude: 13.377704 },
  'Berliner Hochschule für Technik': { latitude: 52.5426, longitude: 13.3490 },
  // Fügen Sie hier weitere Events hinzu
};

const Maps = () => {
  const mapRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPosition, setCurrentPosition] = useState(null);
  const [nearbyEvents, setNearbyEvents] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setCurrentPosition({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    if (currentPosition) {
      const events = Object.entries(eventLocations).filter(([name, coords]) => {
        const distance = getDistance(
          currentPosition.latitude,
          currentPosition.longitude,
          coords.latitude,
          coords.longitude
        );
        return distance <= 5; // 5 km radius
      });
      setNearbyEvents(events);
    }
  }, [currentPosition]);

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c; // Distance in km
    return d;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const handleZoomIn = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: currentPosition ? currentPosition.latitude : 52.5426,
        longitude: currentPosition ? currentPosition.longitude : 13.3490,
        latitudeDelta: 0.05,
        longitudeDelta: 0.025,
      }, 1000);
    }
  };

  const handleZoomOut = () => {
    if (mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: currentPosition ? currentPosition.latitude : 52.5426,
        longitude: currentPosition ? currentPosition.longitude : 13.3490,
        latitudeDelta: 0.2,
        longitudeDelta: 0.1,
      }, 1000);
    }
  };

  const handleSearch = () => {
    const location = eventLocations[searchQuery];
    if (location && mapRef.current) {
      mapRef.current.animateToRegion({
        ...location,
        latitudeDelta: 0.05,
        longitudeDelta: 0.025,
      }, 1000);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBarContainer}>
            <TextInput
              style={styles.searchBar}
              placeholder="Suche nach Event"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity
                style={styles.clearButton}
                onPress={clearSearch}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Text style={styles.clearButtonText}>×</Text>
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Text style={styles.searchButtonText}>Suchen</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.zoomButtons}>
          <TouchableOpacity style={styles.zoomButton} onPress={handleZoomIn}>
            <Text style={styles.zoomButtonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.zoomButton} onPress={handleZoomOut}>
            <Text style={styles.zoomButtonText}>-</Text>
          </TouchableOpacity>
        </View>
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: 52.5426,
            longitude: 13.3490,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {currentPosition && (
            <>
              <Marker
                coordinate={currentPosition}
                title="Aktueller Standort"
                description="Dies ist Ihr aktueller Standort"
              />
              <Circle
                center={currentPosition}
                radius={5000} // 5 km
                strokeColor="rgba(0, 0, 255, 0.5)"
                fillColor="rgba(0, 0, 255, 0.1)"
              />
            </>
          )}
          {nearbyEvents.map(([event, coords]) => (
            <Marker
              key={event}
              coordinate={coords}
              title={event}
              description={`Standort des ${event}`}
            />
          ))}
        </MapView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  searchContainer: {
    paddingTop: 50, // Adjusted margin top to avoid Dynamic Island
    paddingHorizontal: 10,
    zIndex: 1,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    position: 'relative',
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  clearButton: {
    position: 'absolute',
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    fontSize: 18,
    color: '#aaa',
  },
  searchButton: {
    backgroundColor: "#f07151",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  zoomButtons: {
    position: 'absolute',
    right: 15,
    top: 160,
    flexDirection: 'column',
    zIndex: 1,
  },
  zoomButton: {
    backgroundColor: "#f07151",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  zoomButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Maps;