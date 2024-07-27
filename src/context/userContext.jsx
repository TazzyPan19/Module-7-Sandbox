import { useContext, useState, createContext, useReducer } from "react";
import React from "react"; 

export const UserContext = React.createContext();
// Custom provider component for this context.

const userReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_EMOJI" : 
            return { ...state, emoji: action.payload } 
        case "UPDATE_DATE" : 
            return { ...state, currentDate: action.payload } 
        case "UPDATE_USER" : 
            return { ...state, currentUser: action.payload } 
        case "TOGGLE_MODE" : 
            return { ...state, mode: state.mode === "light" ? "dark" : "light" }
        default:
            return state;
    }
}

const initialState = {
    currentDate: new Date(),
    currentUser: { name: "Guest" },
    mode: "light",
    emoji: "⊂(◉‿◉)つ"
}

// Use it in App.jsx like <UserProvider>...</UserProvider>

export const UserProvider = (props) => {
    // store the current user in state at the top level
    // const [currentUser, setCurrentUser] = useState({name: "Guest"});
    // const [mode, setMode ] = useState("light");

    const [state, dispatch] = useReducer(userReducer, initialState)

    const toggleMode = () => {
        // setMode(mode === "light" ? "dark" : "light");
        dispatch({ type: "TOGGLE_MODE"})
    }

    const handleUpdateEmoji = (userEmoji) => {
        // setCurrentUser(user);
        dispatch({ type: "TOGGLE_EMOJI", payload: userEmoji})
    }

    const handleUpdatedDate = (date) => {
        dispatch({ type: "UPDATE_DATE", payload: date})
    }

    // sets user object in state, shared via context
    const handleUpdateUser = (user) => {
        // setCurrentUser(user);
        dispatch({ type: "UPDATE_USER", payload: user})
    }

// 2. Provide the context.
// The Provider component of any context (UserContext.Provider)
// sends data via its value prop to all children at every level.
// We are sending both the current user and an update function

    return (
        <UserContext.Provider value={{...state, handleUpdatedDate, handleUpdateEmoji, handleUpdateUser, toggleMode}}>
            {props.children}
        </UserContext.Provider>
    );
}

// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component

export const useUserContext = () => {
    return useContext(UserContext);
}

// Save as UserContext.jsx in a separate 'context' folder

// NOTE 1st take our UserContext.jsx

// 1a.) update the initial state to have "emoji" with a default value
// 1b.) validate that you can see this in your new user display which is pulling the name and mode out and displaying on the screen.

// 2a.) create a new reducer action (ex: "TOGGLE_EMOJI")
// 2b.) create a new function inside UserProvider which will dispatch that action

// 3a.) place a button somewhere in your poject to fire that action.
// 3b.) can you see that emoji anywhere you are displaying those values from 1b