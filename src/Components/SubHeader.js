import { SubHeaderContainer, SubHeaderTitle } from '../Styles/HeaderStyles';
import { CursorPointer, Seperator } from '../Styles/CommonStyles';

const onClickEvent = (langauge) => {
    console.log(`${langauge} onclick`);
}

const SubHeader = () => {
    return (
        <>
            <SubHeaderContainer>
                <SubHeaderTitle>Language</SubHeaderTitle>
                <CursorPointer onClick = {() => onClickEvent("en")}>English</CursorPointer>
                <Seperator>|</Seperator>
                <CursorPointer onClick = {() => onClickEvent("kr")}>Korean</CursorPointer>
                <SubHeaderTitle style = {{paddingRight: "4px"}}>Contact Us</SubHeaderTitle>
            </SubHeaderContainer>
        </>
    )
}

export default SubHeader;