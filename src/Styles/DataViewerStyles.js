import styled from "styled-components";

export const DataViewerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const DataViewerArrowContainer = styled.div`
    cursor: pointer;
    width: 5px;
    z-index: 10;
`;

export const ImageContainer = styled.div`
    padding: 4px;
    position: relative;
    img {
        height: 100%;
    }
    div {
        text-align: right;
        position: absolute;
        bottom: 6%;
        right: 4%;
        background-color: rgba(255,255,255,0.4);
        border-radius: 4px;
        box-shadow: 0 -3px 6px rgba(255,255,255,0.4), -3px 0px 6px rgba(255,255,255,0.4);
    }
    font-size: 0.8em;
`;

export const ImagesRowContainer = styled.div`
    display: flex;
    div {
        &: first-child {
            padding-left: 0;
        }
        &: last-child {
            padding-right: 0;
        }
    }
`;