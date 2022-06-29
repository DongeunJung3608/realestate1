import { MyPageContainer, MyPageSpan, MyPagePointerSpan, MyPageRow, MyPageBorderRow, MyPageNoneRow } from "../Styles/MyPageStyles";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
    const navigation = useNavigate();

    const email = localStorage.getItem('email');
    const signOutOnClick = () => {
        localStorage.removeItem('email');
        navigation("/");
        window.location.reload();
    }
    return (
        <>
            <MyPageContainer>
                <MyPageBorderRow><MyPageSpan>{email}</MyPageSpan><MyPageSpan></MyPageSpan></MyPageBorderRow>
                <MyPageRow><MyPageSpan>span</MyPageSpan><MyPageSpan>span</MyPageSpan></MyPageRow>
                <MyPageRow><MyPageSpan>span</MyPageSpan><MyPageSpan>span</MyPageSpan></MyPageRow>
                <MyPageBorderRow><MyPageSpan>span</MyPageSpan></MyPageBorderRow>
                <MyPageNoneRow><MyPageSpan></MyPageSpan><MyPagePointerSpan onClick = {signOutOnClick}>Sign out</MyPagePointerSpan></MyPageNoneRow>
            </MyPageContainer>
        </>
    )
}

export default MyPage;