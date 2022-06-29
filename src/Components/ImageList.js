// import building_1 from '../images/buildings/bulding_1.jpg';
// import building_2 from '../images/buildings/bulding_2.jpg';
// import building_3 from '../images/buildings/bulding_3.jpg';
// import building_4 from '../images/buildings/bulding_4.jpg';
// import building_5 from '../images/buildings/bulding_5.jpg';
// import building_6 from '../images/buildings/bulding_6.jpg';
// import building_7 from '../images/buildings/bulding_7.jpg';
// import building_8 from '../images/buildings/bulding_8.jpg';
// import building_9 from '../images/buildings/bulding_9.jpg';
// import building_10 from '../images/buildings/bulding_10.jpg';
// import building_11 from '../images/buildings/bulding_11.jpg';
// import building_12 from '../images/buildings/bulding_12.jpg';
// import building_13 from '../images/buildings/bulding_13.jpg';
// import building_14 from '../images/buildings/bulding_14.jpg';
// import building_15 from '../images/buildings/bulding_15.jpg';
// import building_16 from '../images/buildings/bulding_16.jpg';
// import building_17 from '../images/buildings/bulding_17.jpg';
// import building_18 from '../images/buildings/bulding_18.jpg';
// import building_19 from '../images/buildings/bulding_19.jpg';
// import building_20 from '../images/buildings/bulding_20.jpg';
// import building_21 from '../images/buildings/bulding_21.jpg';
// import building_22 from '../images/buildings/bulding_22.jpg';
// import building_23 from '../images/buildings/bulding_23.jpg';
// import building_24 from '../images/buildings/bulding_24.jpg';

import { ImageContainer, ImagesRowContainer } from '../Styles/DataViewerStyles.js';
import { useNavigate } from 'react-router-dom';

const ImageList = (props) => {
    const tradeInInfo = props.tradeInInfo;
    const dataNumPerPage = props.dataNumPerPage;
    const currentPageFirstDataPointer = props.currentPageFirstDataPointer;
    const imageNumInRow = props.imageNumInRow;

    const navigation = useNavigate();

    const imageOnClick = (idf_num, year) => {
        navigation(`/transaction_data/${idf_num}/${year}`);
    }

    return (
        <>
            {tradeInInfo && Array(parseInt(dataNumPerPage/imageNumInRow)).fill(0).map((i, i_index) => {
                const pointer_row = i_index + currentPageFirstDataPointer;
                return (<ImagesRowContainer key = {i_index}>
                    {Array(imageNumInRow).fill(0).map((j, j_index) => {
                        const pointer_col = currentPageFirstDataPointer + pointer_row % dataNumPerPage * 4 + j_index + 1;
                        if (pointer_col < tradeInInfo.length) {
                            return (<ImageContainer key = {j_index}> 
                                <img src = {require(`../images/buildings/bulding_${Math.ceil(Math.random()*24)}.jpg`)} onClick = {() => imageOnClick(tradeInInfo[pointer_col].idf_num, tradeInInfo[pointer_col].year)}/>
                                <div>
                                    <p>{tradeInInfo[pointer_col].address1}</p>
                                    <p>{`면적 ${tradeInInfo[pointer_col].square_metre}(m*m)\t금액 ${tradeInInfo[pointer_col].price}(원)`}</p>
                                </div>
                            </ImageContainer>)
                        }
                    })}
                </ImagesRowContainer>)
            })}
        </>
    )
}

export default ImageList;