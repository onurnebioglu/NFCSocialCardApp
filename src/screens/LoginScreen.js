import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('TR');
  const [callingCode, setCallingCode] = useState('90');

  const onSelect = (country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/cardlogo.png')} style={styles.logo} />
      <Text style={styles.title}>Bi Card</Text>
      <View style={styles.phoneContainer}>
        <CountryPicker
          countryCode={countryCode}
          withCallingCode
          withFlag
          withFilter
          onSelect={onSelect}
          containerButtonStyle={styles.countryPicker}
        />
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={() => { /* Login function */ }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 20,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#00796B',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  countryPicker: {
    marginRight: 10,
  },
  phoneInput: {
    flex: 1,
    padding: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#00796B',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    backgroundColor: '#00796B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  link: {
    color: '#00796B',
  },
});

export default LoginScreen;
