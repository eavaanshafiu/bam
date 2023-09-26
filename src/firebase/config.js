import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3kiOypR2uNOYuNe4ua2hgwckfCH_2JMI",
  authDomain: "bam-file-uploader.firebaseapp.com",
  projectId: "bam-file-uploader",
  storageBucket: "bam-file-uploader.appspot.com",
  messagingSenderId: "272889079184",
  appId: "1:272889079184:web:0a97dcdeac6eeae2787f15"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);


export {storage,db}
