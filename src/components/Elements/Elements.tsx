import {ElementsContainer} from "./Elements.styled";
import aluminium from "./../../common/icons/aluminium.png"
import ferum from "./../../common/icons/ferum.png"
import copper from "./../../common/icons/copper.png"
import {Container} from "../../common/Container.styled";
import {forwardRef, LegacyRef} from "react";


type ElementsProps = {
    ref:  LegacyRef<HTMLDivElement>
}

const Elements = forwardRef((props: ElementsProps, ref) => {
    return (
        <ElementsContainer ref={ref}>
            <Container>
                <h2 className={"title"}>Цветные металлы</h2>
                <div className={"elements_wrapper"}>
                    <div className={"icon_title"}>
                        <img src={aluminium} alt="Алюминий"/>
                        <div>Алюминий</div>
                        <div className={"price"}>600₽ за килограмм</div>
                    </div>
                    <div className={"icon_title"}>
                        <img src={ferum} alt="Железо"/>
                        <div>Железо</div>
                        <div className={"price"}>15000₽ за тонну</div>
                    </div>
                    <div className={"icon_title"}>
                        <img src={copper} alt="Медь"/>
                        <div>Медь</div>
                        <div className={"price"}>600₽ за килограмм</div>
                    </div>
                </div>
            </Container>

        </ElementsContainer>
    );
});

export default Elements;