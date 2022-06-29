import SearchBox from "../Components/SearchBox";
import { TaxListWrapper } from "../Styles/ListStyles";
import TaxList from '../Components/TaxList.js';
import { useState } from 'react';
import { useParams } from "react-router-dom";

const Tax = () => {
    const params = useParams();

    const [tax, setTax] = useState({tax1:0, tax2:0, tax3:0, tax4:0, tax5:0, loss1:0, loss2:0, yearyearyear:0});

    const searchOnClick = (price, investmentPrice) => {
        console.log('this is working');
        
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
            tax2 = 60000 + 0.0015 * (priceInt - 60000000);
        } else if (priceInt <= 300000000) {
            tax2 = 195000 + 0.0025 * (priceInt - 150000000);
        } else {
            tax2 = 490000 + 0.004 * (priceInt - 300000000);
        }

        const income = priceInt * 0.04;

        if (income <= 120000000) {
            tax3 = income * 0.06;
        } else if (income < 460000000) {
            tax3 = income * 0.15;
        } else if (income < 880000000) {
            tax3 = income * 0.24;
        } else if (income < 1500000000) {
            tax3 = income * 0.35;
        } else if (income < 3000000000) {
            tax3 = income * 0.38;
        } else if (income < 5000000000) {
            tax3 = income * 0.40;
        } else if (income < 10000000000) {
            tax3 = income * 0.42;
        } else {
            tax3 = income * 0.45;
        }

        tax4 = 0;
        if (income > 34000000) {
            tax4 = 40000000 * 0.0368 + (income - 34000000) * 0.0667;
        }

        tax5 = income * 0.1;

        const loss1 = income * 0.027089;
        console.log('아 이건 또 뭐야', loss1);
        let loss2 = investmentPrice * 0.01;
        
        const k = price / (income - tax1 - tax2 - tax3 - tax4 - tax5 - loss1 - loss2);

        let interestRate = 1.3421 + 3.0;
        const loss2Org = investmentPrice * interestRate * 0.01;
        console.log("근데 왜 음수가 나와", loss2Org);

        let yearyearyear = 0;
        const investmentPriceOrg = investmentPrice;

        // console.log(income, loss1, investmentPrice * interestRate * 0.01)
        // investmentPrice = investmentPrice - (income - tax1 - tax2 - tax3 - tax4 - tax5 - loss1 - investmentPrice * interestRate * 0.01);
        // interestRate = 1.3421 + 3.0 + ((2.6818 + 3.0) - interestRate) * 0.25;
        // console.log(interestRate, investmentPrice, investmentPrice * interestRate * 0.01);

        console.log('아', loss2);

        while (investmentPrice > 0 ){
            if ((income - tax1 - tax2 - tax3 - tax4 - tax5 - loss1 - loss2) < 1 ) {
                console.log("혹쉬 이거 걸리나");
                if (yearyearyear < 2) {
                    alert("투자금을 낮춰주세요. 대출금리는 최근 금리를 반영하여 높게 측정됩니다.")
                }
                break;
            }
            console.log("무슨 차이가 있지?", investmentPrice, income, tax1 + tax2 + tax3 + tax4 + tax5, loss1, loss2);
            investmentPrice = investmentPrice - (income - tax1 - tax2 - tax3 - tax4 - tax5 - loss1 - loss2);
            // investmentPrice = investmentPrice - (income - tax1 - tax2 - tax3 - tax4 - tax5 - loss1 - investmentPrice * interestRate * 0.01);
            interestRate = 1.3421 + 3.0 + ((2.6818 + 3.0) - interestRate) * 0.25;
            loss2 = investmentPrice * interestRate * 0.01;
            if (loss2 < 1) {
                console.log("혹쉬 이거 걸리나");
                if (yearyearyear < 2) {
                    alert("투자금을 낮춰주세요. 대출금리는 최근 금리를 반영하여 높게 측정됩니다.")
                }
                break;
            }
            // console.log(loss2);
            // console.log(investmentPrice, income - tax1 - tax2 - tax3 - tax4 - tax5 - loss1 - loss2);
            yearyearyear = yearyearyear + 1;
            // console.log(interestRate);
            // tic = tic + 1;
        }

        console.log(yearyearyear);

        setTax((prevState) => ({ ...prevState, tax1: tax1, tax2: tax2, tax3: tax3, tax4: tax4, tax5: tax5, loss1: loss1, loss2: loss2Org, yearyearyear: yearyearyear }));
    } 
    
    return (
        <TaxListWrapper>
            <SearchBox onClick = {searchOnClick} price = {params.price}/>
            <TaxList tax = {tax}/>
        </TaxListWrapper>
    )
}

export default Tax;