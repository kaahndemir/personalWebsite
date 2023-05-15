import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/SFPro/sf-pro-bold.OTF';
import './fonts/SFPro/sf-pro-regular.OTF';
import './fonts/SFPro/sf-pro-medium.OTF';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtXmLLr1gZ7Y89wHbJ_vmT1JJsPV5nHVk",
  authDomain: "codeoguz-website.firebaseapp.com",
  projectId: "codeoguz-website",
  storageBucket: "codeoguz-website.appspot.com",
  messagingSenderId: "279198405169",
  appId: "1:279198405169:web:2e511b964a527e4233bb10",
  measurementId: "G-0N38EX57T5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
