import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
// import bridge from '@vkontakte/vk-bridge';
import App from './components/App/App';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCiHKeu37N0O-rOk0hDvu7hoxQOuomKJ9I',
  authDomain: 'strella-c116b.firebaseapp.com',
  databaseURL: 'https://strella-c116b.firebaseio.com',
  projectId: 'strella-c116b',
  storageBucket: 'strella-c116b.appspot.com',
  messagingSenderId: '1041732495339',
  appId: '1:1041732495339:web:d6bd0ca9193da4ce749bae',
  measurementId: 'G-NW09138K35',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// Init VK  Mini App
// bridge.send('VKWebAppInit');

ReactDOM.render(<App />, document.getElementById('root'));
if (process.env.NODE_ENV === 'development') {
  import('./eruda').then(({ default: eruda }) => {}); //runtime download
}
