import styled from 'styled-components';
import { pointColorDark, pointColorBlue, lightGrey } from './ColorSetting';

export const PagesContainer = styled.div`
    text-align: center;
    .active-page {
        border-bottom: 2px solid ${pointColorBlue};
    }
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px;
`;

export const PageContainer = styled.span`
    color: ${pointColorDark};
    margin: 2px;
    padding: 0.2rem 0.6rem;
    min-padding: 4px;
    cursor: pointer;
`;

export const PagesWrapper = styled.div`
    min-width: 50%;
`;

export const PageArrow = styled(PageContainer)`
    font-size: 0.8em;
    font-weight: 900;
`;

export const PageArrowClickUnable = styled(PageArrow)`
    color: ${lightGrey};
`;

