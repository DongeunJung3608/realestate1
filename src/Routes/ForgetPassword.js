import SignForm from '../Components/SignForm.js';
import { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(1);

    const emailOnChange = (event) => {
        console.log('forgetpassword password on change', event.target.value);
        setEmail(event.target.value);
    }
    const buttonOnClick = () => {
        setEmailValid(email.includes("@"));
        axios.post(process.env.REACT_APP_API + '/account/passwordReset')
    }
    return (
        <SignForm 
            title = "Forgot your password?" 
            subTitle = "Enter yoru email and we'll send you a code you can use to update your password."
            inputs = {[{placeholder: "Email address", onChange: emailOnChange, warning: "Please enter a valid email address.", valid: emailValid}]}
            button = {{text: "Reset my password", onClick: buttonOnClick}}
            links = {[
                {text: "", link: "/sign_in", linktext: "Go back to sign in."}
            ]}
        />
    )
}

export default ForgetPassword;