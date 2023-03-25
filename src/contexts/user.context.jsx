import { UserCredential } from 'firebase/auth';
import { createContext, useState } from 'react';


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

    console.log(value);

    return (
        <UserContext.Provider value={value}>
        {children}
        </UserContext.Provider>
        );
};