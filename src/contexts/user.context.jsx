import { UserCredential } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener} from "../utils/firebase/firebase.utils"

// Value we want to access
export const UserContext = createContext(
    {
        currentUser: null,
        setCurrentUser: (e) => null,
    }
);

// The provider
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(()=> {
        const unsubscribe = onAuthStateChangedListener((user)=> {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        
        return unsubscribe;
    }, []);

    console.log(value);

    return (
        <UserContext.Provider value={value}>
        {children}
        </UserContext.Provider>
        );
};