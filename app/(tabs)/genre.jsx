import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import GenreTile from '../(genre)/genreTile'; // Pfad zur GenreTile-Komponente

const genres = [
  { id: '1', name: 'Jazz', color: '#4682B4' },
  { id: '2', name: 'Pop', color: '#A58A2A' },
  { id: '3', name: 'Country', color: '#2E8B57' },
  { id: '4', name: 'Rock', color: '#4682B4' },
  { id: '5', name: 'Classical', color: '#8B4513' },
  { id: '6', name: 'Hip-Hop', color: '#9B4513' },
  { id: '7', name: 'Blues', color: '#9B0082' },
  { id: '8', name: 'Electronic', color: '#A54A5A' },
  { id: '9', name: 'Music', color: '#9B4513' },
  { id: '10', name: 'Music', color: '#9B4513' },
];

const Genre = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={genres}
        renderItem={({ item }) => <GenreTile genre={item} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
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
  row: {
    justifyContent: 'space-between',
  },
});

export default Genre;