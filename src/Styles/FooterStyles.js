import styled from 'styled-components';
import { lightGrey } from './ColorSetting';

export const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translateY(150%);
    text-align: center;
    font-weight: 400;
    width: 100%;
    padding: 4rem 0;
    background-color: ${lightGrey};
`;