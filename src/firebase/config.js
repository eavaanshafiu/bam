import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3kiOypR2uNOYuNe4ua2hgwckfCH_2JMI",
  authDomain: "bam-file-uploader.firebaseapp.com",
  projectId: "bam-file-uploader",
  storageBucket: "bam-file-uploader.appspot.com",
  messagingSenderId: "272889079184",
  appId: "1:272889079184:web:0a97dcdeac6eeae2787f15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

export {storage}
