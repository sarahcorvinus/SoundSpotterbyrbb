import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const data = [
  { id: '1', name: 'Max Mustermann', type: 'Artist', genre: 'Jazz' },
  { id: '2', name: 'Rock am Ring', type: 'Event', genre: 'Rock' },
  { id: '3', name: 'Jazz Festival', type: 'Event', genre: 'Jazz' },
  { id: '4', name: 'Anna Smith', type: 'Artist', genre: 'Pop' },
  { id: '5', name: 'Techno Parade', type: 'Event', genre: 'Electronic' },
  { id: '6', name: 'Lena Meyer', type: 'Artist', genre: 'Classical' },
  { id: '7', name: 'Electronic Beats', type: 'Event', genre: 'Electronic' },
  { id: '8', name: 'Classical Evening', type: 'Event', genre: 'Classical' },
  { id: '9', name: 'John Doe', type: 'Artist', genre: 'Rock' },
  { id: '10', name: 'Pop Concert', type: 'Event', genre: 'Pop' },
  { id: '11', name: 'Rock Legends', type: 'Event', genre: 'Rock' },
  { id: '12', name: 'Sophie Turner', type: 'Artist', genre: 'Country' },
  { id: '13', name: 'Blues Night', type: 'Event', genre: 'Blues' },
  { id: '14', name: 'Folk Festival', type: 'Event', genre: 'Country' },
  { id: '15', name: 'David Guetta', type: 'Artist', genre: 'Electronic' },
  { id: '16', name: 'Reggae Sunsplash', type: 'Event', genre: 'Hip-Hop' },
  { id: '17', name: 'Jazz & Blues', type: 'Event', genre: 'Jazz' },
  { id: '18', name: 'Alice Cooper', type: 'Artist', genre: 'Rock' },
  { id: '19', name: 'Indie Rock Fest', type: 'Event', genre: 'Rock' },
  { id: '20', name: 'Hip Hop Bash', type: 'Event', genre: 'Hip-Hop' },
  { id: '21', name: 'Emma Brown', type: 'Artist', genre: 'Classical' },
  { id: '22', name: 'Classical Harmonies', type: 'Event', genre: 'Classical' },
  { id: '23', name: 'Pop Extravaganza', type: 'Event', genre: 'Pop' },
  { id: '24', name: 'Michael Jackson Tribute', type: 'Artist', genre: 'Pop' },
  { id: '25', name: 'Summer Jam', type: 'Event', genre: 'Country' },
  { id: '26', name: 'Rock n Roll Marathon', type: 'Event', genre: 'Rock' },
  { id: '27', name: 'Bob Dylan', type: 'Artist', genre: 'Folk' },
  { id: '28', name: 'Country Music Fest', type: 'Event', genre: 'Country' },
  { id: '29', name: 'EDM Night', type: 'Event', genre: 'Electronic' },
  { id: '30', name: 'Hannah Montana', type: 'Artist', genre: 'Pop' },
  { id: '31', name: 'Blues Brothers', type: 'Event', genre: 'Blues' },
  { id: '32', name: 'Soul Train', type: 'Event', genre: 'Blues' },
  { id: '33', name: 'Tina Turner', type: 'Artist', genre: 'Rock' },
  { id: '34', name: 'Live Jazz', type: 'Event', genre: 'Jazz' },
  { id: '35', name: 'Orchestral Concert', type: 'Event', genre: 'Classical' },
];

const EventsByGenre = () => {
  const route = useRoute();
  const { genre } = route.params;
  const filteredData = data.filter(item => item.genre === genre);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{genre} Events</Text>
      <FlatList
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
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
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

export default EventsByGenre;
