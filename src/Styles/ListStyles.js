import styled from 'styled-components';
import { lightGrey } from './ColorSetting';

export const ListWapper = styled.div`
    padding-top: 10px;
    text-align: right;
    p {
        display: flex;
        &: first-child {
            border-top: 2px solid ${lightGrey};
            border-radius: 4px 4px 0 0;
            // span {
            //     &: first-child {
            //         border-radius: 4px 0 0 0;
            //     }
            //     &: last-child {
            //         border-radius: 0 4px 0 0;
            //     }
            // }
        }
        &: last-child {
            span {
                &: first-child {
                    border-radius: 0 0 0 4px;
                }
                &: last-child {
                    border-radius: 0 0 4px 0;
                }
            }
        }
    }
    span {
        border-bottom: 2px solid ${lightGrey};
        border-right: 2px solid ${lightGrey};
        padding: 10px;
        background-color: white;
        &: first-child {
            border-left: 2px solid ${lightGrey};
            text-align: left;
        }
    }

`;

export const List40Span = styled.span`
    width: 40%;
`;

export const List30Span = styled.span`
    width: 30%;
`;

export const List20Span = styled.span`
    width: 20%;
`;

export const List10Span = styled.span`
    width: 10%;
`;

export const List25Span = styled.span`
    width: 25%;
`;

export const List5Span = styled.span`
    width: 5%;
`;

export const ShowDetailSpan = styled(List25Span)`
    :hover {
        color: red;
    }
    cursor: pointer;
`;

export const TaxListWrapper = styled.div`
    padding: 1rem;
`;