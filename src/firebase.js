import { initializeApp } from "firebase/app"
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBWxJ9ZIGXtpoq41JbXnlNlsCn1Qj5GAlM",
  authDomain: "disneyplus-clone-aa090.firebaseapp.com",
  projectId: "disneyplus-clone-aa090",
  storageBucket: "disneyplus-clone-aa090.appspot.com",
  messagingSenderId: "1068131889544",
  appId: "1:1068131889544:web:b493f2d378839c771d4a3d"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { firebaseApp, auth, provider, storage };
export default db;