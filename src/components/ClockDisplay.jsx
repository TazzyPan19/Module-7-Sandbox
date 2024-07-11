import { useState, useEffect } from "react";

export function ClockDisplay() {
    // NOTE VARIABLES
    const [showClock, setShowClock] = useState(false);

     // NOTE FUNCTIONS
    const toggleClock = () => {
    setShowClock(!showClock);
    }
    
     // NOTE RETURNS
    return (
        <div className="ClockDisplay componentBox">
            {showClock && <Clock />}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    )
}
