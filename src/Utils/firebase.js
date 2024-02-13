// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDohTnmzvya1UhArqp5nmVJ27QioNJITiA",
    authDomain: "people-sync-6ceef.firebaseapp.com",
    projectId: "people-sync-6ceef",
    storageBucket: "people-sync-6ceef.appspot.com",
    messagingSenderId: "982074967745",
    appId: "1:982074967745:web:249fa2a53ef81d38da3640",
    measurementId: "G-DS81VGLL62",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
