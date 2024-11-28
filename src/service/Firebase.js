// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { addDoc, collection, getFirestore } from "firebase/firestore";
// import JGRCollection from "./JGRCollection.mock";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "joe-gibbs-racing-jgr.firebaseapp.com",
    projectId: "joe-gibbs-racing-jgr",
    storageBucket: "joe-gibbs-racing-jgr.firebasestorage.app",
    messagingSenderId: "143293976804",
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;

// JGRCollection.forEach(async (obj) => {
//     const docRef = await addDoc(collection(db, 'JGRCollection'), obj);
//     console.log('Documento id', docRef.id);
// });
