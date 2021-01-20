import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCQbZUf5J0EeBlmy1dEAbvxAvFTk3sJ2Q4",
    authDomain: "kmail-2970a.firebaseapp.com",
    projectId: "kmail-2970a",
    storageBucket: "kmail-2970a.appspot.com",
    messagingSenderId: "334100435663",
    appId: "1:334100435663:web:443f847f1a2a3c311e5dba",
    measurementId: "G-JKLPD1DN81"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }