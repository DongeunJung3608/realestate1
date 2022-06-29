import styled from "styled-components";
import { lightGrey } from "./ColorSetting";
import { InputBorderLightGrey, WarningText, PointButton, borderLightGrey } from "./CommonStyles";

export const SignFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 40px;
    border-radius: 10px;
    border: 2px solid white;
    font-weight: 600;
    box-shadow: 0 3px 6px rgb(0,0,0,16%), 0 3px 6px rgb(0,0,0,23%);
    background-color: white;
`;

export const SignFormBackground = styled.div`
    background-color: ${lightGrey};
    padding: 2rem 4rem;
    min-height: 88vh;
`;

export const SignFormInput = styled(InputBorderLightGrey)`
    margin-top: 10px;
    width: 96%;
`;

export const SignFormInputWarningText = styled(WarningText)`
    padding: 0 5px 0 5px;
    font-size: 0.8em;
    font-weight: 400;
    border-radius: 4px;
`;

export const SignFormButton = styled(PointButton)`
    margin-top: 10px;
    ${borderLightGrey};
    padding: 6px;
    border-radius: 4px;
`;

export const SignFormPPadding10 = styled.p`
    padding-top: 10px;
`;

export const SignFormSubTitle = styled(SignFormPPadding10)`
    padding-bottom: 20px;
`;
