import { initializeApp } from "firebase/app";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    getAuth,
    signOut,
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCnfD7ybbzzoe5U9QUzvQp41h-5DA5mDds",
    authDomain: "sepid-auth.firebaseapp.com",
    projectId: "sepid-auth",
    storageBucket: "sepid-auth.appspot.com",
    messagingSenderId: "584657582024",
    appId: "1:584657582024:web:9dc849f31cd84918b432fd",
    measurementId: "G-PRYYNKYS72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const firebaseLogin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const firebaseRegister = async (email, password) => {
    try {
        await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const firebaseLogout = () => {
    try {
        signOut(auth);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

const firebaseGoogle = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }
}

export {
    firebaseRegister,
    firebaseLogout,
    firebaseGoogle,
    firebaseLogin,
    auth,
}
