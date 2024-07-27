import { BitcoinRates } from "../components/BitcoinRates";
import { useUserContext } from "../context/userContext";
// import { useState, useRef } from "react";

export const LabOne = () => {
    // NOTE STATES AND VARIABLES
    const { currentUser, handleUpdateUser } = useUserContext();
    // NOTE FUNCTIONS
    
    // NOTE RETURNS
    return (
        <div>
            <p>{currentUser.name}</p>
            <h3>Bitcoin Exchange</h3>
            <BitcoinRates></BitcoinRates>
            {/* <VideoPlayer></VideoPlayer> */}
        </div>
    )
}

// function VideoPlayer() {
//     const [isPlaying, setIsPlaying] = useState(false);
//     const videoRef = useRef(null); // 1. Create the ref
  
//     function handleClick() {
//       // use the current property of the ref object to access play and pause functions
//       isPlaying ? videoRef.current.pause() : videoRef.current.play(); // 3. Use the ref to call DOM functions
//       setIsPlaying(!isPlaying); // switch between playing and paused
//     }
    
//     return (
//       <div className="VideoPlayer componentBox">
//         {/* button to play or pause the video */}
//         <button onClick={handleClick}> {isPlaying ? "Pause" : "Play"} </button>
//         {/* 2. Initialise the ref */}
//         <video ref={videoRef} width="250">
//           <source
//             type="video/mp4"
//             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
//           />
//         </video>
//       </div>
//     );
//   }