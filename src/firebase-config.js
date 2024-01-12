
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBTV2-9mlr3U_j9lU12_z8EqsrYR8RIaaU",
    authDomain: "matri6-a28f2.firebaseapp.com",
    projectId: "matri6-a28f2",
    storageBucket: "matri6-a28f2.appspot.com",
    messagingSenderId: "1061020621651",
    appId: "1:1061020621651:web:53fe35676cb1860f7c9fa6"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth(app)