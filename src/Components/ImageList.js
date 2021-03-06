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

    const imageOnClick = (tradeInInfo) => {
        console.log(tradeInInfo);
        // navigation(`/transaction_data/${idf_num}/${year}`);

        // address1: "??????????????? ????????? ?????????"
        // address2: "?????????"
        // floor: 16
        // idf_num: 7
        // price: 7400
        // square_metre: 32.44
        // trade_in_month: 1
        // trade_in_year: 2006
        // zoning1: "????????????"
        // zoning2: "??????"
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
        <>
            {tradeInInfo && Array(parseInt(dataNumPerPage/imageNumInRow)).fill(0).map((i, i_index) => {
                const pointer_row = i_index + currentPageFirstDataPointer;
                return (<ImagesRowContainer key = {i_index}>
                    {Array(imageNumInRow).fill(0).map((j, j_index) => {
                        const pointer_col = currentPageFirstDataPointer + pointer_row % dataNumPerPage * 4 + j_index + 1;
                        if (pointer_col < tradeInInfo.length) {
                            return (<ImageContainer key = {j_index}> 
                                <img src = {require(`../images/buildings/bulding_${Math.ceil(Math.random()*24)}.jpg`)} onClick = {
                                    () => imageOnClick(tradeInInfo[pointer_col])}
                                />
                                <div>
                                    <p>{tradeInInfo[pointer_col].address1}</p>
                                    <p>{`?????? ${tradeInInfo[pointer_col].square_metre}(m*m)\t?????? ${tradeInInfo[pointer_col].price}(???)`}</p>
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