
import { createContext, useEffect, useReducer } from 'react';
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils"

import { createAction } from '../utils/reducer.utils';

// Value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (e) => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
}

const userReducer = (state, action) => {
    console.log("dispatched");
    console.log(action);
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}


const INITIAL_STATE = {
    currentUser: null
};

// The provider
export const UserProvider = ({ children }) => {

    const [{ currentUser }, dispath] = useReducer(userReducer, INITIAL_STATE);

    const setCurrentUser = (user) => {
        dispath(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))
    };
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
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