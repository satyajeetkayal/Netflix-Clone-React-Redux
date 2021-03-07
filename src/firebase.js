import  firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA4t8roDI8YnyBVa4WHk64rXxOcZW2A9XY",
    authDomain: "netflix-clone-ffbe6.firebaseapp.com",
    projectId: "netflix-clone-ffbe6",
    storageBucket: "netflix-clone-ffbe6.appspot.com",
    messagingSenderId: "957528272619",
    appId: "1:957528272619:web:39092eed09ace7ba86d8ae"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {auth};
  export default db;