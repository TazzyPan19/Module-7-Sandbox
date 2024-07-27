import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";

export const SubscriberForm = () => {
    const [status, setStatus] = useState('');
    const [firstName, resetFirstName] = useFormInput('johndoe42');
    const [profileName, resetProfileName] = useFormInput('Johndoe42rules');
    const [email, resetEmail] = useFormInput('johndoe42@unknown.com');

    const handleNameChange = (e) => firstName.onChange(e) ;
    const handleEmailChange = (e) => email.onChange(e) ;
    const handleProfileNameChange = (e) => profileName.onChange(e) ;

    function handleSubscribe() {
        resetFirstName(); 
        resetEmail();
        resetProfileName();
        setStatus(`Thanks for subscribing! ${profileName.value}!`)
    }

    return (
        <div className="SubscribeForm componentBox">
            <label>First Name: {/* form inputs with similar props */}
                <input value={firstName.value} onChange={handleNameChange} />
            </label><br />
            <label>Profile Name: {/* form inputs with similar props */}
                <input value={profileName.value} onChange={handleProfileNameChange} />
            </label><br />
            <label>Email: {/* form inputs with similar props */}
                <input value={email.value} onChange={handleEmailChange} />
            </label><br /> <br />
                <button onClick={handleSubscribe}>Subscribe</button>
            <div>{status}</div>
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