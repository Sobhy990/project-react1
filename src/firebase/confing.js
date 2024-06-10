// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth   } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdiBA1nxs3EIPNOETMV9Hs94gNxiL9p-0",
  authDomain: "cogent-bison-419715.firebaseapp.com",
  projectId: "cogent-bison-419715",
  storageBucket: "cogent-bison-419715.appspot.com",
  messagingSenderId: "880624759571",
  appId: "1:880624759571:web:00c901a6c10e149455e0e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export  const auth = getAuth(app);