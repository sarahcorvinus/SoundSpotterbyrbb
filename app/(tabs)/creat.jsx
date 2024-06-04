import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Creat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.messageBox}>
        <Text style={styles.messageText}>
          Als Fan kannst du keine Events erstellen. 
          Bitte melde dich als Artist an, um diese Funktion zu nutzen.
        </Text>
      </View>
    </View>
  );
};

export default Creat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  messageBox: {
    backgroundColor: '#f07151',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});