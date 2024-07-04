import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Share Card" onPress={() => navigation.navigate('CardShare')} />
      <Button title="Friends List" onPress={() => navigation.navigate('FriendList')} />
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
    marginBottom: 20,
  },
});

export default HomeScreen;
