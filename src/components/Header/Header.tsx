import {HeaderContainer, HeaderTitle, LinksContainer} from "./Header.styled";
import {RefObject} from "react";

export type LinksProps = {
    scrollToRef: (ref: RefObject<HTMLElement>) => void
    contactsRef:  RefObject<HTMLElement>
    metalRef: RefObject<HTMLElement>
    informationRef: RefObject<HTMLElement>

}

const Header = ({scrollToRef, contactsRef, metalRef, informationRef}: LinksProps) => {
    return (
        <HeaderContainer>
            <HeaderTitle>ООО КФК Мастер трейд</HeaderTitle>
            <LinksContainer>
                <a onClick={() => scrollToRef(metalRef)}>Металл</a>
                <a onClick={() => scrollToRef(informationRef)}>Информация</a>
                <a onClick={() => scrollToRef(contactsRef)}>Контакты</a>
            </LinksContainer>


        </HeaderContainer>
    );
};

export default Header;