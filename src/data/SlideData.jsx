import { SlideWork } from "../containers/SlideWork";
import { LabOne } from "../containers/LabOne";
import { CustomHookSandbox } from "../containers/CustomHookSandbox";
import { LabTwo } from "../containers/LabTwo";
import { LabContextWork } from "../containers/LabContextWork";
import { LabThree } from "../containers/LabThree";
import React, { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";


export const Square = () => {
    // NOTE STATES AND VARIABLES
    const squareObject = useRef();
    let [searchParams, setSearchParams] = useSearchParams();

    // NOTE FUNCTIONS

    // function handleParamChange() {
    //   squareObject.style.backgroundColor = "black";
    //   squareObject.style.border = "2px solid blue";
    // }

    setTimeout(() => {
        squareObject.current.style.backgroundColor = "black";
        squareObject.current.style.border = "2px solid blue";
    },0)

    return (
      <div ref={squareObject}>Hello</div>
    );
  
    // NOTE RETURNS
  }

export const slideWorkData = [
    {id: "1", path: "slide-work" , element: <SlideWork />, lab:"Slide Work"}, 
    {id: "2", path: "lab-one" , element: <LabOne />, lab:"Lab 1"}, 
    {id: "3", path: "custom-hook" , element: <CustomHookSandbox />, lab:"Custom Hooks"}, 
    {id: "4", path: "lab-two" , element: <LabTwo />, lab:"Lab 2"},
    {id: "5", path: "context-work" , element: <LabContextWork />, lab:"Lab Context Work"},
    {id: "6", path: "lab-three" , element: <LabThree />, lab:"Lab 3"},
    {id: "7", path: "square" , element: <Square />, lab:"Square Task"},
]
