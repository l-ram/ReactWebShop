import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc, getDocs, collection, writeBatch, query, DocumentData } from "firebase/firestore";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    User,
    signOut,
    onAuthStateChanged,
    NextOrObserver
}
    from "firebase/auth";
import { IShopData } from "../../types/IShopData";

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

// Create new collection
export const addCollectionAndDocuments = async (collectionKey:string, objectsToAdd:IShopData[]) => {
    const collectionRef = collection(db, collectionKey);
    console.log(collectionRef);
    const batch = writeBatch(db);

    objectsToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('Done');
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);
    const querySnapShot = await getDocs(q);

    const categoryMap = querySnapShot.docs.reduce((acc:DocumentData, docSnapshot) => {
        const { title, items } = docSnapshot.data();
        console.log(items)
        acc[title.toLowerCase()] = items;
        console.log(acc);
        return acc;
    }, {});

    return categoryMap;
}

export const createUserDocumentFromAuth = async (user: User, additionalInfo?:{}) => {
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

export const signInAuthUserWithEmailAndPassword = async (email:string, password:string) => {

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => {
    onAuthStateChanged(auth, callback)};