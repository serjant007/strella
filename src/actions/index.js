import firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

export const initialize = () => {
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
};

export const createDesk = (name) => {
  const db = firebase.firestore();

  return db
    .collection('desks')
    .add({ name })
    .then((docRef) => docRef.get());
};

export const getDesks = () => {
  const db = firebase.firestore();

  return db
    .collection('desks')
    .get()
    .then((querySnapshot) => {
      const desks = [];

      querySnapshot.forEach((doc) => {
        desks.push({ id: doc.id, name: doc.data().name });
      });
      return desks;
    });
};

export const deleteDesk = (id) => {
  const db = firebase.firestore();

  return db.collection('desks').doc(id).delete();
};

export const createColumn = (name, deskId) => {
  const db = firebase.firestore();

  return db
    .collection('columns')
    .add({ name, deskId })
    .then((docRef) => docRef.get());
};

export const getColumns = (deskId) => {
  const db = firebase.firestore();

  return db
    .collection('columns')
    .where('deskId', '==', deskId)
    .get()
    .then((querySnapshot) => {
      const columns = [];

      querySnapshot.forEach((doc) => {
        const { deskId, name } = doc.data();

        columns.push({ id: doc.id, deskId, name });
      });
      return columns;
    });
};

export const deleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection('columns').doc(id).delete();
};

export const createCard = (name, columnId) => {
  const db = firebase.firestore();

  return db
    .collection('cards')
    .add({ name, columnId })
    .then((docRef) => docRef.get());
};

export const getCards = (columnId) => {
  const db = firebase.firestore();

  return db
    .collection('cards')
    .where('columnId', '==', columnId)
    .get()
    .then((querySnapshot) => {
      const cards = [];

      querySnapshot.forEach((doc) => {
        const { columnId, name } = doc.data();

        cards.push({ id: doc.id, columnId, name });
      });
      return cards;
    });
};

export const deleteCard = (id) => {
  const db = firebase.firestore();

  return db.collection('cards').doc(id).delete();
};
