import { useState, useEffect } from "react";

export function Clock() {
    // NOTE VARIABLES
    const [date, setDate] = useState(new Date());

    // NOTE FUNCTIONS
    useEffect(() => {   // first argz is usually an arrow function
        
        setInterval(() => tick(), 1000);
        console.log("Clock component mounted");

    }, []); // second arg is an array of dependencies

    const tick = () => {
        setDate(new Date());
        console.log("tick"); // track the effect frequency
    };

    // NOTE RETURNS
    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
                {date.toLocaleTimeString()}
        </div>
    );
}

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