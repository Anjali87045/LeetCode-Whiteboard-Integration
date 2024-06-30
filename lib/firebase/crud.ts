import { initializeApp } from 'firebase/app';
import { getFirestore, getDoc, doc } from 'firebase/firestore/lite';

//from project settings on firebase
const firebaseConfig = {
    apiKey: "AIzaSyD9PMU2ImbLT8uaF_V5cOm68bnS-kNp3wI",
    authDomain: "leetcodeboard-dbe22.firebaseapp.com",
    projectId: "leetcodeboard-dbe22",
    storageBucket: "leetcodeboard-dbe22.appspot.com",
    messagingSenderId: "22644316002",
    appId: "1:22644316002:web:22da889f269a77bdeefe3b",
    measurementId: "G-Q8M4K7GMM4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore 
const db = getFirestore(app);

export{db}