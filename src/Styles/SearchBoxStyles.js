import styled from 'styled-components';
import { borderLightGrey, PointButton, InputBorderLightGrey } from './CommonStyles';

export const SearchBoxWrapper = styled.div`
    display: flex;
    width: 100%;
    // justify-content: space-between;

    input {
        &: first-child {
            border-radius: 4px 0 0 4px !important;
            border-right: none;
        }
    }

    button {
       &: last-child {
            border-radius: 0 4px 4px 0 !important;
            border-left: none;
       } 
    }

    padding: 0;
    border: none;
`;

export const SearchBoxInput = styled(InputBorderLightGrey)`
    width: 40%;
`;

export const SearchBoxButton = styled(PointButton)`
    ${borderLightGrey};
    width: 20%;
`;