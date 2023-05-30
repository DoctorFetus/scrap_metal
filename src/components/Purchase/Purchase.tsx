import {Container} from "../../common/Container.styled";
import {PurchaseContainer} from "./Purchase.styled";

const Purchase = () => {
    return (
        <Container>
        <PurchaseContainer>

               <h3>15 тысяч рублей за тонну</h3>
                <a className={"call"} href="tel:+79851257968">Позвонить нам</a>
        </PurchaseContainer>
        </Container>
    );
};

export default Purchase;