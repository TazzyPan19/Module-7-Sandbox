import './App.css'
import { useState } from 'react';
import { SlideWork } from '../src/containers/SlideWork'
import { slideWorkData } from '../src/data/SlideData'

function App() {
  // NOTE STATES AND VARIABLES
  const [contentName, setContentName] = useState(""); 

  // NOTE FUNCTIONS
  const buttonConstructor = () => {
    const buttonList = slideWorkData.map((content) => {
      return (
        <button onClick={() => setContentName(content.lab)}>
          {content.lab}
        </button>
      )
    })
    
    return buttonList;
  };

  const displayHandler = () => {
    switch (contentName) {
      case slideWorkData[0].lab:
        return <SlideWork />
      default:
        return <div>Click on a button to display each of the lab exercises</div>; 
      }
  } 

  //  NOTE RETURNS
  return (
    <>
      <div className='main-app-container'>
        <h1>Module 7 Lab Work!</h1>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
          {buttonConstructor()}
        </div>
        <div>
          {displayHandler()}
        </div>
      </div>
    </>
  )
}

export default App
