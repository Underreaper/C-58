import firebase from 'firebase'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUNMhHU0Xg8ZLK70kAzHk8SfqzN-orO3o",
  authDomain: "wireless-buzzer-app-ffc14.firebaseapp.com",
  databaseURL: "https://wireless-buzzer-app-ffc14.firebaseio.com",
  projectId: "wireless-buzzer-app-ffc14",
  storageBucket: "wireless-buzzer-app-ffc14.appspot.com",
  messagingSenderId: "982311234981",
  appId: "1:982311234981:web:5b00b48051f5e077640c4c",
  measurementId: "G-16L30J0K3N"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();