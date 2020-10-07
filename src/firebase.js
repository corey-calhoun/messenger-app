import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPJIp7OS_bAO3RvljdwkTnXP0UZgFbaHY",
    authDomain: "messenger-app-e5fb3.firebaseapp.com",
    databaseURL: "https://messenger-app-e5fb3.firebaseio.com",
    projectId: "messenger-app-e5fb3",
    storageBucket: "messenger-app-e5fb3.appspot.com",
    messagingSenderId: "84513464885",
    appId: "1:84513464885:web:8251d8d8e965fabfaa877c",
    measurementId: "G-SZZPLJNG3G"
});

const db = firebaseApp.firestore();

export default db;

