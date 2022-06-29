import { HeaderLink } from "../Styles/HeaderStyles";
import { ReactComponent as Reservation } from '../images/free-icon-font-car-building-6955503.svg'
import { Link } from 'react-router-dom'

const HeaderHome = (props) => {
    const color = Object.keys(props).length ? props.color : {icon: "white", home: "white"};
    return (
        <div>
            <HeaderLink>
                <Link to = "/" style = {{color: color.home}}>
                    <Reservation width="30" height="30" fill={color.icon} />realestate.com.DJ
                </Link>
            </HeaderLink>
        </div>
    )
}

export default HeaderHome;
