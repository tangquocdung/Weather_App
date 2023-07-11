import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCfYuWFGfPzeMDDGw4mfS86I2ddKtDlYWs",
  authDomain: "maltimart-5172a.firebaseapp.com",
  projectId: "maltimart-5172a",
  storageBucket: "maltimart-5172a.appspot.com",
  messagingSenderId: "973171791517",
  appId: "1:973171791517:web:b80381dbface8093672674",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
