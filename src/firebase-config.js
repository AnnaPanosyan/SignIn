import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyB7Pn1zTklKJLW71PSL_quFG2OI5jMwxi4",
  authDomain: "fir-auth-article-66da6.firebaseapp.com",
  projectId: "fir-auth-article-66da6",
  storageBucket: "fir-auth-article-66da6.appspot.com",
  messagingSenderId: "419126010838",
  appId: "1:419126010838:web:8936b8a9643f3eb44f7a77",
  measurementId: "G-7F0CNKBNE5"


};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }