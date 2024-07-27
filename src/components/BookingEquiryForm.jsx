import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export const BookingEquiryForm = () => {
    const [status, setStatus] = useState('');
    const [referenceNumber, setReferenceNumber] = useState(Math.floor(Math.random() * 10_000));
    const [firstName, resetFirstName] = useFormInput('John');
    const [lastName, resetLastName] = useFormInput('Doe');
    const [email, resetEmail] = useFormInput('johndoe42@unknown.com');
    const [phoneNumber, resetPhoneNumber] = useFormInput('1034-431-945');

    const handleFirstNameChange = (e) => firstName.onChange(e) ;
    const handleLastNameChange = (e) => lastName.onChange(e) ;
    const handleEmailChange = (e) => email.onChange(e) ;
    const handlePhoneNumberChange = (e) => phoneNumber.onChange(e) ;

    function handleSubscribe() {
        resetFirstName(); 
        resetLastName();
        resetEmail();
        resetPhoneNumber();
        setStatus(`Thanks for completing the form, we will book you in! 
            ${firstName.value + ' ' + lastName.value}! Your Reference Number: 
            ${'#' + referenceNumber}`);
    }

    return (
        <div className="SubscribeForm componentBox">
            <h3>Car Reservation Booking</h3>
            <p>Please fill out the form below with all your details so we can get in touch to you.</p>
            <label>First Name: {/* form inputs with similar props */}
                <input value={firstName.value} onChange={handleFirstNameChange} />
            </label><br />
            <label>Last Name: {/* form inputs with similar props */}
                <input value={lastName.value} onChange={handleLastNameChange} />
            </label><br />
            <label>Date: {/* form inputs with similar props */}
                <input type="date" />
            </label><br />
            <label>Email: {/* form inputs with similar props */}
                <input value={email.value} onChange={handleEmailChange} />
            </label><br /> 
            <label>Contact Number: {/* form inputs with similar props */}
                <input value={phoneNumber.value} onChange={handlePhoneNumberChange} />
            </label><br /><br />
                <button onClick={handleSubscribe}>Book In!</button>
            <br /><div>{status}</div>
        </div>
    );
}

export const FormDecorator = ({ children }) => {
    return (
        <div className="" style={{
            border: "solid 1px blue",
            width: "100%",
            padding: "10px", 
            margin: "10px"
            }}>
            {children}
        </div>
    )
}