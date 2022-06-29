import { SignFormContainer, SignFormBackground, SignFormInput, SignFormInputWarningText, SignFormButton, SignFormPPadding10, SignFormSubTitle } from '../Styles/SignFormStyles.js';
import { pointColorBlue } from "../Styles/ColorSetting";
import { PointColorLink } from "../Styles/CommonStyles";
import HeaderHome from '../Components/HeaderHome.js';

const SignForm = (props) => {
    const title = props.title;
    const subTitle = props.subTitle;
    const inputs = props.inputs;
    const button = props.button;
    const links = props.links;

    return (
        <SignFormBackground>
            <SignFormContainer>
                <HeaderHome color = {{icon: pointColorBlue, home: "black"}}/>
                {title && <h2>{title}</h2>} {/*title*/}
                {subTitle && <SignFormSubTitle>{subTitle}</SignFormSubTitle>} {/*sub title*/}
                {inputs && inputs.map((input, i) => { {/*inputs*/}
                    return <div key = {i}>
                        <SignFormInput placeholder = {input.placeholder} onChange = {(event) => {input.onChange(event)}} />
                        {!input.valid && <SignFormInputWarningText>{input.warning}</SignFormInputWarningText>}
                    </div>
                })}
                {button && <SignFormButton onClick = {button.onClick}>{button.text}</SignFormButton>} {/*button*/}
                {links && links.map((link, i) => { {/*links*/}
                    return <div key = {i}>
                        <SignFormPPadding10 key = {i}>{link.text} <PointColorLink to = {link.link}>{link.linktext}</PointColorLink></SignFormPPadding10>
                    </div>
                })}
            </SignFormContainer>
        </SignFormBackground>
    )
}

export default SignForm;