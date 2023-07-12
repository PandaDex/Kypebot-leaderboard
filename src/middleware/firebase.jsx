import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

import {
    getFirestore,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const firebaseConfig = {
    apiKey: "AIzaSyCP7UZqfOoqjJgUMAZyOnylnJFTubJ4-pY",
    authDomain: "gamble-admin.firebaseapp.com",
    projectId: "gamble-admin",
    storageBucket: "gamble-admin.appspot.com",
    messagingSenderId: "252538113339",
    appId: "1:252538113339:web:660a44057f3d435bb97b1e"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const logInWithEmailAndPassword = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        const user = res.user;
        console.log(user.uid);
    } catch (err) {
        console.log(err)
    }
}

const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    logout
};