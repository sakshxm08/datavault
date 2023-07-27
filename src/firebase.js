// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe6DhMaEzwoyAlyen8I-95f_hoSKwRWYY",
  authDomain: "datavault-85439.firebaseapp.com",
  projectId: "datavault-85439",
  storageBucket: "datavault-85439.appspot.com",
  messagingSenderId: "115937284124",
  appId: "1:115937284124:web:e2b44cbba7773e6286cfd9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const createUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);

      // ..
    });
};

const signInWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const logOut = () => {
  signOut(auth);
};

export {
  app,
  auth,
  googleProvider,
  githubProvider,
  createUser,
  signInWithEmail,
  logOut,
};
