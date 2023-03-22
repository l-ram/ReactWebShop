import { createContext, useState } from 'react';


// Value we want to access
export const UserContext = createContext(
    {
        currentUser: null,
        setCurrentUser: () => null,
    }
);

// The provider
export const UserProvider = ({ }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return
    <UserContext.Provider value={value}>
    </UserContext.Provider>
}