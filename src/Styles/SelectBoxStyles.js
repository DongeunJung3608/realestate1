import styled from 'styled-components';
import { PointButton } from './CommonStyles';

export const SelectBoxWrapper = styled.div`
    display: flex;
    width: 60%;
    text-align: center;
`;

export const SelectBoxButton = styled(PointButton)`
    width: 50%;
    border: 2px solid yellow;
    border-radius: 4px;
    padding: 10px;
`;