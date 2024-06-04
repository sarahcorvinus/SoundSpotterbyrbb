import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GenreTile = ({ genre }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('EventsByGenre', { genre: genre.name });
  };

  return (
    <TouchableOpacity style={[styles.tile, { backgroundColor: genre.color }]} onPress={handlePress}>
      <Text style={styles.tileText}>{genre.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tile: {
    flex: 1,
    margin: 10,
    height: 100,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  tileText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GenreTile;
