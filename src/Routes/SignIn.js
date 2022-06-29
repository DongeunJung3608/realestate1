import SignForm from '../Components/SignForm.js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
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
            axios.get(process.env.REACT_APP_API + `/account/login?email=${email}&password=${password}`).then(res => {
                localStorage.setItem("email", "cscid170319@ajou.ac.kr");
                navigation("/"); // successfully singed in.
                window.location.reload(); // 
            }).catch(err => {
                console.log(err); // return error
            })
        }
    }
    return (
        <SignForm 
            title = "Sign in" 
            subTitle = "Sign in with this account across the following sites."
            inputs = {[
                {placeholder: "Email address", onChange: emailOnChange, warning: "Please enter a valid email address.", valid: emailValid}, 
                {placeholder: "Password", onChange: passwordOnChange, warning: "Please enter a password.", valid: passwordValid}
            ]}
            button = {{text: "Sign in", onClick: buttonOnClick}}
            links = {[
                {text: "", link: "/forget_password", linktext: "Forget your password?"}, 
                {text: "Not signed up?", link: "/sign_up", linktext: "Create an account."}
            ]}
        />
    )
}

export default SignIn;