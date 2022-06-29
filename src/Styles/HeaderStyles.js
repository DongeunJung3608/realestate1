import styled from "styled-components";
import { pointColorDark } from "./ColorSetting";
import { FontBold } from "./CommonStyles";

export const SubHeaderContainer = styled.div`
    text-align: right;
    padding: 0.2rem;
`;

export const SubHeaderTitle = styled(FontBold)`
    padding: 0 10px;
`;

export const HeaderContainer = styled.div`
    background-color: ${pointColorDark};
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    align-items: center;
    z-index: 100;
`;

export const HeaderLink = styled.span`
    display: inline-block;
    padding: 10px;
`;
