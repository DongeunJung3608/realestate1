import { useLocation, Link } from 'react-router-dom';
import { FooterContainer } from '../Styles/FooterStyles';

const Footer = () => {
    const location = useLocation().pathname;
    const footer_shown = (location === "/sign_in" || location === "/sign_up" || location === "/forget_password") ? false : true;
    return (
        <>
            {footer_shown && 
                <FooterContainer>
                    <p>realestate.com.DJ is committed to ensuring digital accessibility for individuals with disabilities. We are continuously working to improve the accessibility of our</p>
                    <p>web experience for everyone, and we welcome feedback and accommodation requests. If you wish to report an issue or seek an accommodation, please</p>
                    <p><Link to = "/contant_us" style = {{color: "blue"}}>let us know</Link></p>
                    <p>Seoul, South Korea</p>
                </FooterContainer>
            }
        </>
    )
}

export default Footer;
