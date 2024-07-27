import { BitcoinRatesMod } from "../components/BitcoinRatesMod";
import { useUserContext } from "../context/userContext";

export const LabTwo = () => {
    // NOTE STATES AND VARIABLES
    const { currentUser, handleUpdateUser } = useUserContext();
    // NOTE FUNCTIONS
    
    // NOTE RETURNS
    return (
        <div>
            <p>{currentUser.name}</p>
            <h3>Bitcoin Exchange Modification</h3>
            <BitcoinRatesMod />
        </div>
    )
}