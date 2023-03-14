import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    User,
    UserCredential
}
    from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBqZg0GXsW1G13AhaXOHY_wXNu9srXXNhI",
    authDomain: "webshop-c2174.firebaseapp.com",
    projectId: "webshop-c2174",
    storageBucket: "webshop-c2174.appspot.com",
    messagingSenderId: "342940755995",
    appId: "1:342940755995:web:3ce6cdfd830dd946c6b0be"
};


const firebaseApp = initializeApp(firebaseConfig);

//  init authnetication
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

//  init firestore
export const db = getFirestore(firebaseApp);

export const createUserDocumentFromAuth = async (user: User, additionalInfo:{}) => {
    if (!user) return; 

    const userDocRef = doc(db, 'users', user.uid);
    console.log(userDocRef, "userDoc");

    const userSnapShot = await getDoc(userDocRef);
    console.log(userSnapShot);
    console.log(userSnapShot.exists());

    if (!userSnapShot.exists()) {
        const { displayName, email } = user;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        } catch (error) {
            if (error instanceof Error) {
                console.log("error creating the user", error.message);
            } else {
                console.log("unexpected error", error)
            }
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email:string, password:string) => {

    return await createUserWithEmailAndPassword(auth, email, password);
};