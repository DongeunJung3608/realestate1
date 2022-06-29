import { ListWapper, List30Span, List10Span, List20Span, List5Span } from "../Styles/ListStyles";

const DataList = (props) => {
    const tradeInInfo = props.tradeInInfo;
    const page = props.page;
    const currentPageFirstDataPointer = props.currentPageFirstDataPointer;
    return (
        <>
            <ListWapper>
                {tradeInInfo && Array(page.dataNumPerPage).fill(0).map((i, index) => {
                    const pointer = index + currentPageFirstDataPointer;
                    if (pointer < tradeInInfo.length) {
                        return <p key = {index}>
                            <List5Span>{index+1}</List5Span>
                            <List30Span>{tradeInInfo[pointer].address1}</List30Span>
                            <List20Span>{tradeInInfo[pointer].address2}</List20Span>
                            <List10Span>{tradeInInfo[pointer].zoning1}</List10Span>
                            <List20Span>{tradeInInfo[pointer].zoning2}</List20Span>    
                            <List10Span>{tradeInInfo[pointer].square_metre}</List10Span>
                            <List10Span>{tradeInInfo[pointer].price}</List10Span>
                            <List5Span>{tradeInInfo[pointer].floor}</List5Span>
                            <List5Span>{tradeInInfo[pointer].trade_in_year}</List5Span>
                            <List5Span>{tradeInInfo[pointer].trade_in_month ? tradeInInfo[pointer].trade_in_month : null}</List5Span>    
                        </p>
                    }
                })} 
            </ListWapper>
        </>
    )
}

export default DataList;