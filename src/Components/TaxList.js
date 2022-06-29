import { ListWapper, ShowDetailSpan, List40Span, List10Span, List25Span, TaxListWrapper } from "../Styles/ListStyles";

const TaxList = (props) => {
    const tax = props.tax;
    return (
        <>
            <ListWapper>
                <p><List25Span>취득세</List25Span><List40Span>{tax.tax1 && tax.tax1}</List40Span><List10Span>원</List10Span><ShowDetailSpan>자세히보기</ShowDetailSpan></p>
                <p><List25Span>재산세</List25Span><List40Span>{tax.tax2}</List40Span><List10Span>원</List10Span><ShowDetailSpan>자세히보기</ShowDetailSpan></p>
                <p><List25Span>종합소득세</List25Span><List40Span>{tax.tax3}</List40Span><List10Span>원</List10Span><ShowDetailSpan>자세히보기</ShowDetailSpan></p>
                <p><List25Span>건강보험료</List25Span><List40Span>{tax.tax4}</List40Span><List10Span>원</List10Span><ShowDetailSpan>자세히보기</ShowDetailSpan></p>
                <p><List25Span>부가가치세</List25Span><List40Span>{tax.tax5}</List40Span><List10Span>원</List10Span><ShowDetailSpan>자세히보기</ShowDetailSpan></p>
                <p><List25Span>대출이자</List25Span><List40Span>{"-"}</List40Span><List10Span>원</List10Span><ShowDetailSpan>자세히보기</ShowDetailSpan></p>
                <p><List25Span>공실비용</List25Span><List40Span>{"-"}</List40Span><List10Span>원</List10Span><ShowDetailSpan>자세히보기</ShowDetailSpan></p>
            </ListWapper>
        </>
    )
}

export default TaxList;