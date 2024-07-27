import { useState } from "react";

export const useFormInput = (initialValue) => {
    // our custom hook still uses useState internally
    const [value, setValue] = useState(initialValue);

    // object containing the state value and handler function
    // can be unpacked to set as props for input element
    const inputProps = {
        value: value,
        onChange: handleChange
        };

     // generic function to reset input value
    const reset = () => setValue('');

    // generic handler function to update state
    function handleChange(e) {
        setValue(e.target.value);
    }

    // returns data to be used by a component
    return [inputProps, reset];
}