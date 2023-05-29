import React from 'react';
import {HeaderContainer, HeaderTitle, LinksContainer} from "./Header.styled";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>ООО КФК Мастер трейд</HeaderTitle>
            <LinksContainer>
                <a href={"#"}>Металл</a>
                <a href={"#"}>Информация</a>
                <a href={"#"}>Контакты</a>
            </LinksContainer>


        </HeaderContainer>
    );
};

export default Header;