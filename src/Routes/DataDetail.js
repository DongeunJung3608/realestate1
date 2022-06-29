import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { MyPageContainer, MyPageSpan, MyPagePointerSpan, MyPageRow, MyPageBorderRow, MyPageNoneRow } from "../Styles/MyPageStyles";
import { useState, useEffect } from "react";

const DataDetail = () => {
    const navigation = useNavigate();
    const params = useParams(); 

    const [data, setData] = useState();

    useEffect(() => {
        axios.get(process.env.REACT_APP_API + `/trade_detail/?idf_num=${params.idf_num}&year=${params.year}`).then(res => {
            const data = res.data.result[0];
    
            const address = data.address1 + " " + data.address2;
            const floor = data.floor + "층";
            const price = data.price;
            const square_metre = data.square_metre;
            const trade_year_month = data.trade_in_year + "년 " + data.trade_in_month + "월";
            const zoning = data.zoning1 + " " + data.zoning2;
            
            setData({
                address: address,
                floor: floor,
                price: price,
                square_metre: square_metre,
                trade_year_month: trade_year_month,
                zoning: zoning
            })
    
        }).catch(err => {
            alert(err.message);
        })
    }, []);

   

    const linkToCalculator = () => {
        navigation(`/tax_calculation/${data.price}`);
    }

    return (
        <>
            <MyPageContainer>
                <MyPageBorderRow><MyPageSpan>{"상세 정보"}</MyPageSpan><MyPageSpan></MyPageSpan></MyPageBorderRow>
                <MyPageRow><MyPageSpan>{"주소"}</MyPageSpan><MyPageSpan>{data && data.address}</MyPageSpan></MyPageRow>
                <MyPageRow><MyPageSpan>{"용도"}</MyPageSpan><MyPageSpan>{data && data.zoning}</MyPageSpan></MyPageRow>
                <MyPageRow><MyPageSpan>{"거래년월"}</MyPageSpan><MyPageSpan>{data && data.trade_year_month}</MyPageSpan></MyPageRow>
                <MyPageRow><MyPageSpan>{"층"}</MyPageSpan><MyPageSpan>{data && data.floor}</MyPageSpan></MyPageRow>
                <MyPageRow><MyPageSpan>{"면적"}</MyPageSpan><MyPageSpan>{data && data.square_metre}</MyPageSpan></MyPageRow>
                <MyPageBorderRow><MyPageSpan>{"거래가격"}</MyPageSpan><MyPageSpan>{data && data.price}</MyPageSpan></MyPageBorderRow>
                <MyPageNoneRow><MyPageSpan></MyPageSpan><MyPagePointerSpan onClick = {linkToCalculator}>계산기로 이동</MyPagePointerSpan></MyPageNoneRow>
            </MyPageContainer>
        </>
    )
}

export default DataDetail;