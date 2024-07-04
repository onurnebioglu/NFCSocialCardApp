import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const RegisterScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);

  useEffect(() => {
    const verifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved - allow signInWithPhoneNumber.
      }
    }, auth);
    verifier.render().then(function(widgetId) {
      window.recaptchaWidgetId = widgetId;
    });
  }, []);

  const handleSendVerification = () => {
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        setConfirmationResult(confirmationResult);
      }).catch((error) => {
        console.error(error);
      });
  };

  const handleVerifyCode = () => {
    if (confirmationResult) {
      confirmationResult.confirm(verificationCode)
        .then((result) => {
          console.log('User signed in successfully.');
        }).catch((error) => {
          console.error('Error verifying code:', error);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="+1234567890"
      />
      <Button title="Send Verification Code" onPress={handleSendVerification} />
      <Text>Verification Code</Text>
      <TextInput
        style={styles.input}
        value={verificationCode}
        onChangeText={setVerificationCode}
      />
      <Button title="Verify Code" onPress={handleVerifyCode} />
      <View id="recaptcha-container"></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 10,
  },
});

export default RegisterScreen;
