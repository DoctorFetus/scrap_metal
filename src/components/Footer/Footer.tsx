import {FooterContainer} from "./Footer.styled";
import {Container} from "../../common/Container.styled";

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <div className={"wrapper"}>
                    <span>Управляющая компания: ООО КФК-Мастер Трейд </span>
                    <span>ИНН: 7703349888</span>
                    <span>КПП: 772001001</span>
                    <span>ОГРН: 1027703000951</span>
                    <span>Отправить запрос: info@isaevskoe.ru</span>
                </div>
            </Container>
        </FooterContainer>
    );
};

export default Footer;