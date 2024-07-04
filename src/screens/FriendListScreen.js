import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FriendListScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friend List Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5F9F6',
  },
  title: {
    fontSize: 24,
    color: '#2A9D8F',
  },
});

export default FriendListScreen;
