import styled from 'styled-components';
import { lightGrey, pointColorDark } from './ColorSetting';
import { CursorPointer } from './CommonStyles';

export const MyPageContainer = styled.div`
    padding-top: 10px;
`;

export const MyPageRow = styled.p`
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid ${lightGrey};
    padding: 10px;
    margin: 0 10px;
`;

export const MyPageSpan = styled.span`
    display: inline-block;
`;

export const MyPagePointerSpan = styled(CursorPointer)`
    display: inline-block;
    color: black;
    :hover {
        color: rgba(40, 44, 52, 0.5); // pointColorDark + opacity 0.5
    }
`;

export const MyPageBorderRow = styled(MyPageRow)`
    border-bottom: 2px solid rgba(40, 44, 52, 0.5); // pointColorDark + opacity 0.5
`;


export const MyPageNoneRow = styled(MyPageRow)`
    border-bottom: none;
`;