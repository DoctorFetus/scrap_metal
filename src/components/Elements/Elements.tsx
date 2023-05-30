import {ElementsContainer} from "./Elements.styled";
import aluminium from "./../../common/icons/aluminium.png"
import ferum from "./../../common/icons/ferum.png"
import copper from "./../../common/icons/copper.png"
import {Container} from "../../common/Container.styled";

const Elements = () => {
    return (
        <ElementsContainer>
            <Container>
                <h2 className={"title"}>Цветные металлы</h2>
                <div className={"elements_wrapper"}>
                    <div className={"icon_title"}>
                        <img src={aluminium} alt="Алюминий"/>
                        <div>Алюминий</div>
                    </div>
                    <div className={"icon_title"}>
                        <img src={ferum} alt="Железо"/>
                        <div>Железо</div>
                    </div>
                    <div className={"icon_title"}>
                        <img src={copper} alt="Медь"/>
                        <div>Медь</div>
                    </div>
                </div>
            </Container>

        </ElementsContainer>
    );
};

export default Elements;