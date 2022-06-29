import SignForm from '../Components/SignForm.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const navigation = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailValid, setEmailValid] = useState(1);
    const [passwordValid, setPasswordValid] = useState(1);

    const emailOnChange = (event) => {
        setEmail(event.target.value);
    }
    const passwordOnChange = (event) => {
        setPassword(event.target.value);
    }
    const buttonOnClick = () => {
        const emailValid = email.includes("@");
        const passwordValid = password.length > 3;

        setEmailValid(emailValid);
        setPasswordValid(passwordValid);

        if ( emailValid && passwordValid ) {
            axios.post(process.env.REACT_APP_API + `/account/join?email=${email}&password=${password}`).then(res => {
                if (res.data.result.affectedRows) {
                    alert("Your account has been created successfully. Please sign in.");
                    navigation("/sign_in"); 
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }
    return (
        <SignForm 
            title = "Create account" 
            subTitle = "You can use this account across the following sites."
            inputs = {[
                {placeholder: "Email address", onChange: emailOnChange, warning: "Please enter a valid email address.", valid: emailValid}, 
                {placeholder: "Password", onChange: passwordOnChange, warning: "Please enter a password.", valid: passwordValid}
            ]}
            button = {{text: "Create account", onClick: buttonOnClick}}
            links = {[
                {text: "Already have an account?", link: "/sign_in", linktext: "Sign in"}
            ]}
        />
    )
}

export default SignUp;