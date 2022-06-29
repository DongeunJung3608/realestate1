import backgroundImg from "../images/http___cdn.cnn.com_cnnnext_dam_assets_160621115931-seoul-after.jpg";
import DataViewer from '../Components/DataViewer.js';
import MapCanvas from '../Components/MapCanvas.js';
import SearchBox from '../Components/SearchBox.js';
import TaxList from "../Components/TaxList";
import { useState } from "react";

const mapOnClick = (event) => {
    const canvas = document.querySelector('#map-canvas')
    const rect = canvas.getBoundingClientRect();
    const x_coordinate = Math.floor(event.clientX - rect.left);
    const y_coordinate = Math.floor(event.clientY - rect.top);
    console.log('coordinates', x_coordinate, y_coordinate, "왼쪽 위가 (0,0)")
}

const Home = () => {
    const [tax, setTax] = useState({tax1:0, tax2:0, tax3:0, tax4:0, tax5:0});
    const searchOnClick = (price, investmentPrice) => {
        const priceInt = parseInt(price);

        let tax1 = 0;
        let tax2 = 0;
        let tax3 = 0;
        let tax4 = 0;
        let tax5 = 0;

        if (priceInt < 600000000) {
            tax1 = priceInt * 0.01;
        } else if (price < 900000000) {
            tax1 = priceInt * 0.02;
        } else {
            tax1 = priceInt * 0.03;
        }

        if (priceInt <= 60000000) {
            tax2 = priceInt * 0.001;
        } else if (priceInt <= 150000000) {
            tax2 = 60000 + 0.015 * (priceInt - 60000000);
        } else if (priceInt <= 300000000) {
            tax2 = 195000 + 0.025 * (priceInt - 150000000);
        } else {
            tax2 = 490000 + 0.04 * (priceInt - 300000000);
        }

        const income = priceInt * 0.04;

        if (income * 12 <= 120000000) {
            tax3 = income * 0.06;
        } else if (income * 12 < 460000000) {
            tax3 = income * 0.15;
        } else if (income * 12 < 880000000) {
            tax3 = income * 0.24;
        } else if (income * 12 < 1500000000) {
            tax3 = income * 0.35;
        } else if (income * 12 < 3000000000) {
            tax3 = income * 0.38;
        } else if (income * 12 < 5000000000) {
            tax3 = income * 0.40;
        } else if (income * 12 < 10000000000) {
            tax3 = income * 0.42;
        } else {
            tax3 = income * 0.45;
        }

        tax4 = 40000000 * 0.0368 + (income * 12 + 40000000 - 34000000) * 0.0667;

        tax5 = income * 0.1;

        setTax((prevState) => ({ ...prevState, tax1: tax1, tax2: tax2, tax3: tax3, tax4: tax4, tax5: tax5 }));
    } 
    return (
        <div>
            <div style = {{height: "40vh", overflow: "hidden"}}>
                <img src = {backgroundImg}></img>
            </div>
            <div style = {{display: "flex", padding: "1rem", justifyContent: "space-around", position: "relative", top: "-100px"}}>
                <MapCanvas onClick = {mapOnClick} />
                <div style = {{display: "flex", flexDirection: "column", width: "59%"}}>
                    <SearchBox onClick = {searchOnClick}/>
                    <TaxList tax = {tax}/>
                </div>
            </div>
        <DataViewer></DataViewer>
        </div>
    )
}

export default Home;