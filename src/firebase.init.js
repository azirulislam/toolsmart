// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByO_J4TgmBsFCECUFbWC7pmawXHRrQizo",
  authDomain: "toolsmart-client.firebaseapp.com",
  projectId: "toolsmart-client",
  storageBucket: "toolsmart-client.appspot.com",
  messagingSenderId: "958575179673",
  appId: "1:958575179673:web:841ab6dba709df8c88c508",
  measurementId: "G-482BMTPRFD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;