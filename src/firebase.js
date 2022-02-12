import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBfCPr_TxMJDaMWNuoyXry6oLEXBGPMmko",
  authDomain: "todo-react-firebase-65554.firebaseapp.com",
  projectId: "todo-react-firebase-65554",
  storageBucket: "todo-react-firebase-65554.appspot.com",
  messagingSenderId: "973283416008",
  appId: "1:973283416008:web:a78b246aeeac42548212fd",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db };
