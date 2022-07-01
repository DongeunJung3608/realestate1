import rightArrow from '../images/right-arrow.png';
import leftArrow from '../images/left-arrow.png';
import { DataViewerContainer, DataViewerArrowContainer } from '../Styles/DataViewerStyles';
import { ImageContainer, ImagesRowContainer } from '../Styles/DataViewerStyles.js';
import inputData from '../Routes/input.json';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DataViewer = () => {
    const navigation = useNavigate();
    const [data, setData] = useState([]);
    const [pointer, setPointer] = useState(0);
    const leftOnClick = () => {
        if (pointer === 0) {
            setPointer(2);
        } else {
            setPointer(pointer - 1);
        }
    }
    const rightOnClick = () => {
        if (pointer === 2) {
            setPointer(0);
        } else {
            setPointer(pointer + 1);
        }
    }
    useEffect(() => {
        const startIndex = Math.floor(Math.random() * (inputData.length-12));
        setData([
            [inputData[startIndex], inputData[startIndex+1], inputData[startIndex+2], inputData[startIndex+3]],
            [inputData[startIndex+4], inputData[startIndex+5], inputData[startIndex+6], inputData[startIndex+7]],
            [inputData[startIndex+8], inputData[startIndex+9], inputData[startIndex+10], inputData[startIndex+11]]
        ])
    }, []);
    const imageOnClick = (tradeInInfo) => {
        const address1 = tradeInInfo.address1;
        const address2 = tradeInInfo.address2;
        const floor = tradeInInfo.floor;
        const idf_num = tradeInInfo.idf_num;
        const price = tradeInInfo.price;
        const square_metre = tradeInInfo.square_metre;
        const trade_in_month = tradeInInfo.trade_in_month;
        const trade_in_year = tradeInInfo.trade_in_year;
        const zoning1 = tradeInInfo.zoning1;
        const zoning2 = tradeInInfo.zoning2;
        navigation(`/transaction_data/${address1}/${address2}/${floor}/${idf_num}/${price}/${square_metre}/${trade_in_month}/${trade_in_year}/${zoning1}/${zoning2}`);
    }
    return (
        <DataViewerContainer style = {{position: "relative", overflowX: "clip"}}>
            <DataViewerArrowContainer style = {{width: "5%"}} onClick={leftOnClick}><img src = {leftArrow}></img></DataViewerArrowContainer>
            <div style = {{overflow: "hidden", width: "80%"}}>
                {data.length && <>
                    <ImageContainer onClick = {()=>imageOnClick(data[pointer][0])} style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "5%", overflow: "hidden"}}>
                        <img src = {require(`../images/buildings/bulding_${pointer + 1}.jpg`)} />
                        <div>
                            {data.length && <p>{`${data[pointer][0].address1}`}</p>}
                            {data.length && <p>{`면적 ${data[pointer][0].price}(m*m)\n금액 ${data[pointer][0].square_metre}(원)`}</p>}
                        </div>
                    </ImageContainer>
                    <ImageContainer onClick = {()=>imageOnClick(data[pointer][1])} style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "28%", overflow: "hidden"}}>
                        <img src = {require(`../images/buildings/bulding_${pointer + 2}.jpg`)} />
                        <div>
                            {data.length && <p>{`${data[pointer][1].address1}`}</p>}
                            {data.length && <p>{`면적 ${data[pointer][1].price}(m*m)\n금액 ${data[pointer][1].square_metre}(원)`}</p>}
                        </div>
                    </ImageContainer>
                    <ImageContainer onClick = {()=>imageOnClick(data[pointer][2])} style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "51%", overflow: "hidden"}}>
                        <img src = {require(`../images/buildings/bulding_${pointer + 3}.jpg`)} />
                        <div>
                            {data.length && <p>{`${data[pointer][2].address1}`}</p>}
                            {data.length && <p>{`면적 ${data[pointer][2].price}(m*m)\n금액 ${data[pointer][2].square_metre}(원)`}</p>}
                        </div>
                    </ImageContainer>
                    <ImageContainer onClick = {()=>imageOnClick(data[pointer][3])} style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "74%", overflow: "hidden"}}>
                        <img src = {require(`../images/buildings/bulding_${pointer + 4}.jpg`)} />
                        <div>
                            {data.length && <p>{`${data[pointer][3].address1}`}</p>}
                            {data.length && <p>{`면적 ${data[pointer][3].price}(m*m)\n금액 ${data[pointer][3].square_metre}(원)`}</p>}
                        </div>
                    </ImageContainer>
                </>}
                {/* <ImageContainer onClick = {imageOnClick} style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "5%", overflow: "hidden"}}>
                    <img src = {require(`../images/buildings/bulding_${pointer + 1}.jpg`)} />
                    <div>
                        {data.length && <p>{`${data[pointer][0].address1}`}</p>}
                        {data.length && <p>{`면적 ${data[pointer][0].price}(m*m)\n금액 ${data[pointer][0].square_metre}(원)`}</p>}
                    </div>
                </ImageContainer>
                <ImageContainer style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "28%", overflow: "hidden"}}>
                    <img src = {require(`../images/buildings/bulding_${pointer + 2}.jpg`)} />
                    <div>
                        {data.length && <p>{`${data[pointer][1].address1}`}</p>}
                        {data.length && <p>{`면적 ${data[pointer][1].price}(m*m)\n금액 ${data[pointer][1].square_metre}(원)`}</p>}
                    </div>
                </ImageContainer>
                <ImageContainer style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "51%", overflow: "hidden"}}>
                    <img src = {require(`../images/buildings/bulding_${pointer + 3}.jpg`)} />
                    <div>
                        {data.length && <p>{`${data[pointer][2].address1}`}</p>}
                        {data.length && <p>{`면적 ${data[pointer][2].price}(m*m)\n금액 ${data[pointer][2].square_metre}(원)`}</p>}
                    </div>
                </ImageContainer>
                <ImageContainer style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "74%", overflow: "hidden"}}>
                    <img src = {require(`../images/buildings/bulding_${pointer + 4}.jpg`)} />
                    <div>
                        {data.length && <p>{`${data[pointer][3].address1}`}</p>}
                        {data.length && <p>{`면적 ${data[pointer][3].price}(m*m)\n금액 ${data[pointer][3].square_metre}(원)`}</p>}
                    </div>
                </ImageContainer> */}
            </div>
            <DataViewerArrowContainer style = {{width: "5%"}} onClick={rightOnClick}><img src = {rightArrow}></img><div></div></DataViewerArrowContainer>
        </DataViewerContainer>
    )
}

export default DataViewer;