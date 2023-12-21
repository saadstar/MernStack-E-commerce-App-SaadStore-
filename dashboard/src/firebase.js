import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOEXT-7XJTnptOgU0WKy8XGGLkc-S-3E0",
  authDomain: "saadstore-ed76a.firebaseapp.com",
  projectId: "saadstore-ed76a",
  storageBucket: "saadstore-ed76a.appspot.com",
  messagingSenderId: "347843629520",
  appId: "1:347843629520:web:f49e976681a2d55e1969d5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default app;
