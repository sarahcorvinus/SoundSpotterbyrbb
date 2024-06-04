import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const data = [
  { id: '1', name: 'Max Mustermann', type: 'Artist' },
  { id: '2', name: 'Rock am Ring', type: 'Event' },
  { id: '3', name: 'Jazz Festival', type: 'Event' },
  { id: '4', name: 'Anna Smith', type: 'Artist' },
  { id: '5', name: 'Techno Parade', type: 'Event' },
  { id: '6', name: 'Lena Meyer', type: 'Artist' },
  { id: '7', name: 'Electronic Beats', type: 'Event' },
  { id: '8', name: 'Classical Evening', type: 'Event' },
  { id: '9', name: 'John Doe', type: 'Artist' },
  { id: '10', name: 'Pop Concert', type: 'Event' },
  { id: '11', name: 'Rock Legends', type: 'Event' },
  { id: '12', name: 'Sophie Turner', type: 'Artist' },
  { id: '13', name: 'Blues Night', type: 'Event' },
  { id: '14', name: 'Folk Festival', type: 'Event' },
  { id: '15', name: 'David Guetta', type: 'Artist' },
  { id: '16', name: 'Reggae Sunsplash', type: 'Event' },
  { id: '17', name: 'Jazz & Blues', type: 'Event' },
  { id: '18', name: 'Alice Cooper', type: 'Artist' },
  { id: '19', name: 'Indie Rock Fest', type: 'Event' },
  { id: '20', name: 'Hip Hop Bash', type: 'Event' },
  { id: '21', name: 'Emma Brown', type: 'Artist' },
  { id: '22', name: 'Classical Harmonies', type: 'Event' },
  { id: '23', name: 'Pop Extravaganza', type: 'Event' },
  { id: '24', name: 'Michael Jackson Tribute', type: 'Artist' },
  { id: '25', name: 'Summer Jam', type: 'Event' },
  { id: '26', name: 'Rock n Roll Marathon', type: 'Event' },
  { id: '27', name: 'Bob Dylan', type: 'Artist' },
  { id: '28', name: 'Country Music Fest', type: 'Event' },
  { id: '29', name: 'EDM Night', type: 'Event' },
  { id: '30', name: 'Hannah Montana', type: 'Artist' },
  { id: '31', name: 'Blues Brothers', type: 'Event' },
  { id: '32', name: 'Soul Train', type: 'Event' },
  { id: '33', name: 'Tina Turner', type: 'Artist' },
  { id: '34', name: 'Live Jazz', type: 'Event' },
  { id: '35', name: 'Orchestral Concert', type: 'Event' },
];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredData(data);
    } else {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    setFilteredData(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Suche nach Artist oder Event"
            value={searchQuery}
            onChangeText={handleSearch}
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
      </View>
      <FlatList
        contentContainerStyle={styles.listContainer}
        data={filteredData}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name} ({item.type})</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    paddingTop: 50, // Adjusted to avoid the Dynamic Island
    paddingHorizontal: 10,
    backgroundColor: '#fff',
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
  listContainer: {
    paddingHorizontal: 10,
  },
  itemContainer: {
    height: 50,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

export default Search;