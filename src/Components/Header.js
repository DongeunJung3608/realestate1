import { HeaderContainer, HeaderLink } from "../Styles/HeaderStyles";
import SubHeader from './SubHeader.js';
import { Link, useLocation } from 'react-router-dom';
import HeaderHome from "./HeaderHome";

const Header = () => {
    const location = useLocation().pathname;
    const header_shown = (location === "/sign_in" || location === "/sign_up" || location === "/forget_password") ? false : true;
    
    const email = localStorage.getItem('email');

    return (
        <>
            <SubHeader />
            {header_shown && 
                <HeaderContainer>
                    <div style = {{display: "flex"}}> {/* left side of header */}
                        <HeaderHome />
                        <div style = {{display: "flex", alignItems: "center"}}> {/* right side of header */}
                            <HeaderLink><Link to = "/tax_calculation">tax calculator</Link></HeaderLink>
                            <HeaderLink><Link to = "/transaction_data">transactions</Link></HeaderLink>
                            <HeaderLink><Link to = "/contact_us">{"feedback&suggestions"}</Link></HeaderLink>
                        </div>
                    </div>
                    <div>
                        {email ? 
                                <HeaderLink><Link to = "/my_page">My Page</Link></HeaderLink>
                            :
                                <HeaderLink><Link to = "/sign_in">Sign in</Link></HeaderLink>
                        }
                        {/* <HeaderLink><Link to = "/sign_in">Sign in</Link></HeaderLink> */}
                    </div>
                </HeaderContainer>
            }
        </>
    )
}

export default Header;