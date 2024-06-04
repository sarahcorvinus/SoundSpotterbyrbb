import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const genresWithTitles = {
  Jazz: ['Event 1', 'Event 2', 'Event 3'],
  Pop: ['Event 4', 'Event 5', 'Event 6'],
  Country: ['Event 7', 'Event 8', 'Event 9'],
  Rock: ['Event 10', 'Event 11', 'Event 12'],
  Classical: ['Event 13', 'Event 14', 'Event 15'],
  HipHop: ['Event 16', 'Event 17', 'Event 18'],
};

const GenreDetail = () => {
  const route = useRoute();
  const { genreName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{genreName} Titles</Text>
      <FlatList
        data={genresWithTitles[genreName]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
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
  item: {
    fontSize: 18,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default GenreDetail;