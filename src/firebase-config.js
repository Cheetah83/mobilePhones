import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAaUsQAhXGcjiOiLdGpsOSjon6DZsUi7hs",
  authDomain: "yachi-mobile-store.firebaseapp.com",
  projectId: "yachi-mobile-store",
  storageBucket: "yachi-mobile-store.appspot.com",
  messagingSenderId: "85367347632",
  appId: "1:85367347632:web:bc8dc7ab8b2354e13c9e75",
  measurementId: "G-N1PQM2N5G0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export default app;