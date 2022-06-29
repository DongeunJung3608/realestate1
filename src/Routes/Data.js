import axios from "axios";
import { useEffect, useState } from "react";
import { SelectBoxWrapper, SelectBoxButton } from '../Styles/SelectBoxStyles';
import Pagination from '../Components/Pagination.js';
import DataList from "../Components/DataList";
import ImageList from "../Components/ImageList";

const Data = () => {
    const viewStyleDetails = {quick: {dataNumPerPage: 12, numPerPage: 15}, detail: {dataNumPerPage: 30, numPerPage: 10}};
    const [viewStyle, setViewStyle] = useState("quick"); // 0: quick view, 1: detail view
    const [tradeInInfo, setTradeInfo] = useState();
    const [page, setPage] = useState({
        currentPage: 1, 
        dataNumPerPage: viewStyleDetails[viewStyle].dataNumPerPage, 
        totalPage: 0, 
        numPerPage: 
        viewStyleDetails[viewStyle].numPerPage
    });
    const [pageList, setPageList] = useState([]);

    useEffect(() => {
        // initialize trade_in_info data
        axios.get(process.env.REACT_APP_API + `/trade`).then(response => {
            setTradeInfo(response.data);
            const totalPage = Math.ceil(response.data.length/page.dataNumPerPage);
            setPageList(Array(page.numPerPage).fill(0).map((i,index) => index + 1));
            setPage((prevState) => ({ ...prevState, totalPage: totalPage }));
        }).catch(error => {
            console.log("something gets wrong", error);
        });
        // initialize page // setPage(1); // does this need?
    }, []);

    const pageOnClick = (event, p) => {
        let activePage = document.querySelector('.active-page');
        if (activePage) {
            activePage.classList.remove('active-page');
        }
        event.target.classList.add('active-page');
        setPage((prevState) => ({ ...prevState, currentPage: p }));
    }

    const pageArrowOnClick = (type) => {
        const newPageList = pageList.map(p => p + type * page.numPerPage);
        setPageList(newPageList)
        setPage((prevState) => ({ ...prevState, currentPage: newPageList[0] }));
    }

    const selectBoxOnClick = (type) => {
        const viewStyleDetail = viewStyleDetails[type];
        setViewStyle(type);
        const totalPage = Math.ceil(tradeInInfo.length/viewStyleDetail.dataNumPerPage);
        setPage((prevState) => ({ ...prevState, numPerPage: viewStyleDetail.numPerPage, dataNumPerPage: viewStyleDetail.dataNumPerPage, totalPage: totalPage, currentPage: 1 }));
        setPageList(Array(viewStyleDetail.numPerPage).fill(0).map((i,index) => index + 1));
    }

    const currentPageFirstDataPointer = (page.currentPage - 1) * page.dataNumPerPage;

    return (
        <div style = {{padding: "1rem"}}>
            <div style = {{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <div style = {{border: "1px solid grey", padding: "10px", width: "10%", textAlign: "center"}}>필터</div>
                <SelectBoxWrapper>
                    <SelectBoxButton id = "quick-view" onClick = {() => {selectBoxOnClick("quick")}}>quick view</SelectBoxButton>
                    <SelectBoxButton id = "detail-view" onClick = {() => {selectBoxOnClick("detail")}}>detail view</SelectBoxButton>
                </SelectBoxWrapper> 
                <select name="pets" id="pet-select" style = {{border: "1px solid grey", padding: "10px", width: "20%", textAlign: "left"}}>
                    <option value="">Sort by</option>
                    <option value="dog">Price(High to Low)</option>
                    <option value="cat">Price(Low to High)</option>
                    <option value="hamster">Newest</option>
                    <option value="parrot">Square Feet</option>
                </select>
            </div>
            {viewStyle === "detail" ? <DataList 
                tradeInInfo = {tradeInInfo}
                page = {page}
                currentPageFirstDataPointer = {currentPageFirstDataPointer}
            /> : <ImageList 
                tradeInInfo = {tradeInInfo} 
                dataNumPerPage = {page.dataNumPerPage} 
                currentPageFirstDataPointer = {currentPageFirstDataPointer}
                imageNumInRow = {4}
            />}
            <Pagination page = {page} pageList = {pageList} pageArrowOnClick = {pageArrowOnClick} pageOnClick = {pageOnClick} />
        </div>
    )
}

export default Data;