// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC7tyy1qg6Yg_GFvG78xdPup7ybuv5CTrI",
  authDomain: "minecard-6df43.firebaseapp.com",
  projectId: "minecard-6df43",
  storageBucket: "minecard-6df43.appspot.com",
  messagingSenderId: "1040252168728",
  appId: "1:1040252168728:ios:3c673a7f1f9274dd38316d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth, firebaseConfig };
