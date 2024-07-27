import { useUserContext } from "../context/userContext";

export const UserStateDisplay = () => {
    // NOTE STATES AND VARIABLES
    const { currentUser, handleUpdateUser } = useUserContext();
    // NOTE FUNCTIONS
    
    // NOTE RETURNS
    return (
        <div>
            <p>{currentUser.name}</p>
        </div>
    )
}