// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN6EnLbXDXIQuQOwGiKjnxzmx3PMmVU4A",
  authDomain: "project-1-ab798.firebaseapp.com",
  projectId: "project-1-ab798",
  storageBucket: "project-1-ab798.appspot.com",
  messagingSenderId: "1071445103945",
  appId: "1:1071445103945:web:f4ff882a91dda21fd67698",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app
