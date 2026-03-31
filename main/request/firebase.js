import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPSHCWj1pZBrtA6AjXRGYnZAlDQ2-xJFA",
  authDomain: "website-mother.firebaseapp.com",
  projectId: "website-mother",
  storageBucket: "website-mother.firebasestorage.app",
  messagingSenderId: "172891808630",
  appId: "1:172891808630:web:9897aa283d1ffeb7db9057",
  measurementId: "G-DYFKSYLMPL",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  addDoc,
  collection,
  db,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
};