// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKkiiFOsqAXL-W_oEoNGS3seaoag1ljj8",
  authDomain: "coder-react-b4c51.firebaseapp.com",
  projectId: "coder-react-b4c51",
  storageBucket: "coder-react-b4c51.appspot.com",
  messagingSenderId: "411667793173",
  appId: "1:411667793173:web:16fa2fa6868c20bdf0951c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  
export const db = getFirestore(app);