import { useState } from "react";
import { slideWorkData } from "../data/SlideData";
import { LabOne } from '../containers/LabOne';
import { LabTwo } from '../containers/LabTwo';
import { LabThree } from '../containers/LabThree';
import { SlideWork } from '../containers/SlideWork';
import { LabContextWork } from '../containers/LabContextWork';
import { CustomHookSandbox } from '../containers/CustomHookSandbox';

export function WelcomePage() {
    // NOTE STATES AND VARIABLES
    const [contentName, setContentName] = useState(""); 

    // NOTE FUNCTIONS
    const buttonConstructor = () => {
        const buttonList = slideWorkData.map((content, index) => {
          return (
            <button key={index} onClick={() => setContentName(content.lab)}>
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
          case slideWorkData[1].lab:
            return <LabOne />
          case slideWorkData[2].lab:
            return <CustomHookSandbox />
          case slideWorkData[3].lab:
            return <LabTwo />
          case slideWorkData[4].lab:
            return <LabContextWork />
          case slideWorkData[5].lab:
            return <LabThree />
          default:
            return <p>Click on a button to display each of the lab exercises</p>; 
          }
      } 

    // NOTE RETURNS
    return (
        <div className='main-app-container'>
            <h1>Module 7 Lab Work!</h1>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    {buttonConstructor()}
                </div>
            <div>
                {displayHandler()}
            </div>
        </div>
    )

}