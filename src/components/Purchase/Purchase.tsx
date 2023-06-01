import {Container} from "../../common/Container.styled";
import {PurchaseContainer} from "./Purchase.styled";

const Purchase = () => {
    return (
        <Container>
        <PurchaseContainer>
                <a className={"call"} href="tel:+79851257968">Позвонить нам</a>
        </PurchaseContainer>
        </Container>
    );
};

export default Purchase;