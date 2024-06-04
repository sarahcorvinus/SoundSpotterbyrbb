import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Card } from 'react-native-elements';
import GenreTile from '../(genre)/genreTile'; // Stellen Sie sicher, dass der Pfad korrekt ist

const Profile = () => {
  const genres = [
    { name: 'Jazz', color: '#ff7f50' },
    { name: 'Pop', color: '#1e90ff' },
    { name: 'Country', color: '#32cd32' },
    { name: 'Rock', color: '#ff6347' },
    { name: 'Classical', color: '#8a2be2' },
    { name: 'HipHop', color: '#ff69b4' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Profil</Text>
        <View style={styles.cardDivider} />
        <View style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://example.com/profile-pic.jpg' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Max Mustermann</Text>
          <Text style={styles.profileGenre}>Musikrichtung: Rock</Text>
          <Text style={styles.profileEvent}>Nächstes Event: Rock am Ring</Text>
        </View>
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 52.5426,
          longitude: 13.3490,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 52.5426, longitude: 13.3490 }}
          title="Berliner Hochschule für Technik"
          description="Standort der BHT"
        />
      </MapView>
      <View style={styles.genreContainer}>
        <FlatList
          data={genres}
          renderItem={({ item }) => <GenreTile genre={item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  cardDivider: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileGenre: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  profileEvent: {
    fontSize: 16,
    color: '#666',
  },
  map: {
    height: 300,
    margin: 20,
  },
  genreContainer: {
    flex: 1,
  },
});
