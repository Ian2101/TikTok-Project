
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBlFk5rPW-HCI41JYWiNMq6caYQfBqN7Q8",
  authDomain: "tiktokclone-c1fb2.firebaseapp.com",
  projectId: "tiktokclone-c1fb2",
  storageBucket: "tiktokclone-c1fb2.appspot.com",
  messagingSenderId: "557421195779",
  appId: "1:557421195779:web:f1b54024cc8556d7af5436"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;