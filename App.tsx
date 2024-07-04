// App.tsx
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './src/firebaseConfig';

// Firebase App'i başlat
initializeApp(firebaseConfig);

const App = () => {
  return <AppNavigator />;
};

export default App;
