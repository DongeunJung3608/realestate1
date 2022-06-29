import { PageContainer, PagesContainer, PagesWrapper, PageArrow, PageArrowClickUnable } from '../Styles/PaginationStyles';

const Pagination = (props) => {  
    const page = props.page;
    const pageList = props.pageList;
    const pageArrowOnClick = props.pageArrowOnClick;
    const pageOnClick = props.pageOnClick;

    return(
        <>
            <PagesContainer>
                {page.currentPage <= page.numPerPage ? 
                        <PageArrowClickUnable>{'<<'}</PageArrowClickUnable>
                    :
                        <PageArrow onClick = {() => pageArrowOnClick((-1) * Math.floor((page.currentPage - 1) / page.numPerPage))}>{'<<'}</PageArrow>
                }
                    {page.currentPage <= page.numPerPage ? 
                            <PageArrowClickUnable>{'<'}</PageArrowClickUnable>
                        :
                            <PageArrow onClick = {() => pageArrowOnClick(-1)}>{'<'}</PageArrow>
                    }
                    <PagesWrapper>
                        {pageList.length > 0 && pageList.map((p, i) => {
                            if (p < page.totalPage + 1) {
                                return (
                                    p === page.currentPage ?
                                    <PageContainer key = {i} className = "active-page" onClick = {(event) => {pageOnClick(event, p)}}>{p}</PageContainer>
                                    :
                                    <PageContainer key = {i} onClick = {(event) => {pageOnClick(event, p)}}>{p}</PageContainer>
                                )
                            }
                            
                        })}
                    </PagesWrapper>
                    {Math.ceil(page.currentPage / page.numPerPage) >= Math.ceil(page.totalPage / page.numPerPage) ?
                        <PageArrowClickUnable>{'>'}</PageArrowClickUnable>
                            :
                        <PageArrow onClick = {() => pageArrowOnClick(1)}>{'>'}</PageArrow>
                    }
                {Math.ceil(page.currentPage / page.numPerPage) >= Math.ceil(page.totalPage / page.numPerPage) ?
                    <PageArrowClickUnable>{'>>'}</PageArrowClickUnable>
                        :
                    <PageArrow onClick = {() => pageArrowOnClick(Math.ceil(page.totalPage / page.numPerPage) - (Math.floor((page.currentPage - 1)/page.numPerPage) + 1))}>{'>>'}</PageArrow>
                }
            </PagesContainer>
        </>
    )
}

export default Pagination;