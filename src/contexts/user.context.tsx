import { createContext, useState } from 'react';

interface IUserContext {
    currentUser: {} | null
    setCurrentUser: () => void
}

// Value we want to access
export const UserContext = createContext<IUserContext>(
    {
        currentUser: null,
        setCurrentUser: () => null
    }
);


// The provider
export const UserProvider = ({ }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    return (
        <UserContext.Provider value={value}
        >
        </UserContext.Provider>
    )
}

const { currentUser, setCurrentUser, value } = UserProvider