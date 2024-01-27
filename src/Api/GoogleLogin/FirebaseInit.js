import firebase from '@react-native-firebase/app';

const FirebaseInit = () => {
  // firebase 초기화 최초 1회. App.js 위치
  const firebaseConfig = {
    apiKey: 'AIzaSyCYoxqgeAhi-JsewMQ6vXNIJVZs57tA0ZA',
    authDomain: 'comit-3037b.firebaseapp.com',
    projectId: 'comit-3037b',
    storageBucket: 'comit-3037b.appspot.com',
    messagingSenderId: '506348598249',
    appId: '1:506348598249:android:00d0740cbe2453e9269178',
    databaseURL: 'https://comit-3037b-default-rtdb.firebaseio.com',
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
};

export default FirebaseInit;
