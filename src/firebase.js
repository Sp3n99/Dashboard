import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "dashboard-a5c1b.firebaseapp.com",
  projectId: "dashboard-a5c1b",
  storageBucket: "dashboard-a5c1b.appspot.com",
  messagingSenderId: "1039194768543",
  appId: "1:1039194768543:web:45d540e8cdb7c5c416ceaa"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);