import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAkSiV0J0K-Glx6R6MxS-IJkEkDrmLfYHc',
  authDomain: '<chatapp-react-17ab5>.firebaseapp.com',
  databaseURL:
    'https://console.firebase.google.com/project/chatapp-react-17ab5/database/chatapp-react-17ab5-default-rtdb/data/~2F.firebaseio.com',
  projectId: 'chatapp-react-17ab5',
  storageBucket: 'chatapp-react-17ab5.appspot.com',
  appId: '1:223864100929:android:e16babc971799fa7014ec0',
  messagingSenderId: '223864100929',
};

// Initialize FireBase
let app;
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export {firebase};
