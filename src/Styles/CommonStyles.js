import styled from "styled-components";
import { css } from 'styled-components';
import { lightGrey, pointColorBlue } from "./ColorSetting";
import { Link } from 'react-router-dom';

export const FontBold = styled.span`
    font-weight: bold;
`;

export const CursorPointer = styled.span`
    cursor: pointer;
`;

export const Seperator = styled.span`
    padding: 4px;
`;

export const PointColorLink = styled(Link)`
    color: ${pointColorBlue};
`;

export const borderLightGrey = css`
    padding: 10px;
    border: 2px solid ${lightGrey};   
`;

export const InputBorderLightGrey = styled.input`
    ${borderLightGrey};
    width: 100%;
    :focus {
        border: 2px solid ${pointColorBlue};
    }
`;

export const PointButton = styled.button`
    background-color: ${pointColorBlue};
    color: white;
`;

export const WarningText = styled.p`
    color: red;
    text-align: left;
`;
