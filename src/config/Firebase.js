import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBVXry100N8OtskUAbeMF_32_TjI48kkJk",
  authDomain: "famovies-57e43.firebaseapp.com",
  projectId: "famovies-57e43",
  storageBucket: "famovies-57e43.appspot.com",
  messagingSenderId: "895618453307",
  appId: "1:895618453307:web:962ae25905c7b3d24f711e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
