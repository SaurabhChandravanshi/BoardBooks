import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { collection, doc, setDoc, getDoc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBgjS4PHWH14SuJe3hoYJOQhYDyzZ9fqRQ",
    authDomain: "i3developer.firebaseapp.com",
    projectId: "i3developer",
    storageBucket: "i3developer.appspot.com",
    messagingSenderId: "961624633697",
    appId: "1:961624633697:web:5d14b6381697a8686a9520",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
    if (!user) {
        signInAnonymously(auth)
            .then(() => {
                console.log('Anonymous Successful.');
            })
            .catch((error) => {
                console.log('Anonymous Login Failed.');
            });
    }
});


export { firebaseApp, auth, onAuthStateChanged, signInAnonymously, collection, doc, setDoc, getDoc, db };