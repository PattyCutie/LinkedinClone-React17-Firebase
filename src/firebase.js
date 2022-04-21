import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    serverTimestamp,
    doc,
    orderBy,
    limit,
    onSnapshot,
    query,
} from "firebase/firestore";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "linkedinclone-react17",
    storageBucket: "l",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
};
//init firebase app
const firebaseApp = initializeApp(firebaseConfig);
// database
const db = getFirestore(firebaseApp);
// authenticate
const auth = getAuth(firebaseApp);


export {
    db,
    auth,
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    serverTimestamp,
    doc,
    orderBy,
    limit,
    onSnapshot,
    query,
    createUserWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
};