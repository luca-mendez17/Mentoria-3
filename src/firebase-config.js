import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCXY1DL2sOBKP0Rs7ybrfgnisOSuxW0A4Y",
  authDomain: "coinbase-79c4c.firebaseapp.com",
  projectId: "coinbase-79c4c",
  storageBucket: "coinbase-79c4c.appspot.com",
  messagingSenderId: "953796032449",
  appId: "1:953796032449:web:122cc1c1432ee1d1cee140"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, app };
