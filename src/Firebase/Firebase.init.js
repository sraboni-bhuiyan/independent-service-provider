// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfVNHQNbSzjaRcJhHf81nvksGviJwND0I",
  authDomain: "independent-service-prov-84fca.firebaseapp.com",
  projectId: "independent-service-prov-84fca",
  storageBucket: "independent-service-prov-84fca.appspot.com",
  messagingSenderId: "849508604436",
  appId: "1:849508604436:web:b57d41a98accd3639ea501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;