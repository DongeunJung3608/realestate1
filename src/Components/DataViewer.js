import rightArrow from '../images/right-arrow.png';
import leftArrow from '../images/left-arrow.png';
import { DataViewerContainer, DataViewerArrowContainer } from '../Styles/DataViewerStyles';
import { ImageContainer, ImagesRowContainer } from '../Styles/DataViewerStyles.js';

const DataViewer = () => {
    return (
        <DataViewerContainer style = {{position: "relative", overflowX: "clip"}}>
            <DataViewerArrowContainer style = {{width: "5%"}}><img src = {leftArrow}></img></DataViewerArrowContainer>
            <div style = {{overflow: "hidden", width: "80%"}}>
                <ImageContainer style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "5%", overflow: "hidden"}}>
                    <img src = {require(`../images/buildings/bulding_4.jpg`)} />
                    <div>
                        <p>{8}</p>
                        <p>{`면적 ${8}(m*m)\t금액 ${8}(원)`}</p>
                    </div>
                </ImageContainer>
                <ImageContainer style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "28%", overflow: "hidden"}}>
                    <img src = {require(`../images/buildings/bulding_5.jpg`)} />
                    <div>
                        <p>{8}</p>
                        <p>{`면적 ${8}(m*m)\t금액 ${8}(원)`}</p>
                    </div>
                </ImageContainer>
                <ImageContainer style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "51%", overflow: "hidden"}}>
                    <img src = {require(`../images/buildings/bulding_6.jpg`)} />
                    <div>
                        <p>{8}</p>
                        <p>{`면적 ${8}(m*m)\t금액 ${8}(원)`}</p>
                    </div>
                </ImageContainer>
                <ImageContainer style = {{display: "inline-block", width: "20%", position: "absolute", top: "-90%", left: "74%", overflow: "hidden"}}>
                    <img src = {require(`../images/buildings/bulding_3.jpg`)} />
                    <div>
                        <p>{8}</p>
                        <p>{`면적 ${8}(m*m)\t금액 ${8}(원)`}</p>
                    </div>
                </ImageContainer>
            </div>
            <DataViewerArrowContainer style = {{width: "5%"}}><img src = {rightArrow}></img><div></div></DataViewerArrowContainer>
        </DataViewerContainer>
    )
}

export default DataViewer;