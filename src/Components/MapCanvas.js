import mapImg from '../images/대한민국한국지도500.png';
import { lightGrey } from '../Styles/ColorSetting';

const MapCanvas = (props) => {
    return (
        <div style = {{maxWidth: "800px", width: "39%", maxeight: "800px", borderRadius: "4px", border: `4px solid ${lightGrey}`, display: "flex", justifyContent: "center", backgroundColor: "white"}}>
            <div id = "map-canvas" style = {{height: "100%"}} onClick = {(event) => props.onClick(event)}>
                <img src = {mapImg}></img>
            </div>
        </div>
    )
}

export default MapCanvas;