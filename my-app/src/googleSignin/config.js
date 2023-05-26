import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDgiX1H6oZOB8-T6cFtVE50UsvrkgtBmxw",
  authDomain: "wahyu-project-e6e3b.firebaseapp.com",
  projectId: "wahyu-project-e6e3b",
  storageBucket: "wahyu-project-e6e3b.appspot.com",
  messagingSenderId: "19142158975",
  appId: "1:19142158975:web:52508425be4915f276ad4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};