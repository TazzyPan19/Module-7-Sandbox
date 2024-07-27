import { useUserContext } from "../context/userContext";
import { emojiData } from "../data/EmojiData";

import React from "react";

export const LabThree = () => {
    // NOTE STATES AND VARIABLES
    const { currentUser, handleUpdateEmoji, emoji,  handleUpdatedDate, currentDate} = useUserContext();
    const formattedDate = currentDate.toDateString();

    // NOTE FUNCTIONS
    const handleEmojiChange = () => {
        const randomMood = Object.values(emojiData[Math.floor(Math.random() * emojiData.length)]);
        handleUpdateEmoji(randomMood);
        // handleUpdatedDate()
        // console.log(randomMood);
    }

    // NOTE RETURNS
    return (
        <div>
            <h3>Emoji Change Context</h3>
            <p>{currentUser.name + " " +  emoji + formattedDate }</p>
            <button onClick={handleEmojiChange}>Change Mood!</button>
        </div>
    )
}