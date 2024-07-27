import { useUserContext } from "../context/userContext";
import React from "react";


export const LabContextWork = () => {
    // NOTE STATES AND VARIABLES
    const { currentUser, handleUpdateUser, mode, emoji, toggleMode } = useUserContext();
    // console.log(mode);

    // NOTE FUNCTIONS

    const handleNameChange = (e) => {
        handleUpdateUser({ name: e.target.value })
    }
    
    // NOTE RETURNS
    return (
        <div style={{ border: "solid blue 1px", padding: "10px", margin: "10px", 
            backgroundColor: mode === "dark" ? "black" : "lightgrey",
            color: mode === "dark" ? "white" : "black"}}>
            <h3>Hello, Context Work!</h3>
            <input value={currentUser.name} onChange={handleNameChange} type="text" />
            <button onClick={toggleMode}>{mode}</button>
            <p>{emoji}</p>
        </div>
     )
}