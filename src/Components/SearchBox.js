import { SearchBoxWrapper, SearchBoxInput, SearchBoxButton } from '../Styles/SearchBoxStyles';
import { useEffect, useState } from 'react';

const SearchBox = (props) => {

    const [price, setPrice] = useState("");
    const [investmentPrice, setInvestmentPrice] = useState("");

    const priceOnChange = (event) => {
        setPrice(event.target.value);
    }

    const investmentPriceOnChange = (event) => {
        setInvestmentPrice(event.target.value);
    }

    return (
        <>
            <SearchBoxWrapper>
                <SearchBoxInput placeholder='거래가격' value={props.price && props.price*10000} onChange = {(event) => {priceOnChange(event)}}/>
                <SearchBoxInput placeholder='투자금' onChange = {(event) => {investmentPriceOnChange(event)}}/>
                <SearchBoxButton onClick = {() => props.onClick(price, investmentPrice)}>Search</SearchBoxButton>
            </SearchBoxWrapper>
        </>
    )
}

export default SearchBox;
