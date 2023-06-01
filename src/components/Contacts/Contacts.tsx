import {Container} from "../../common/Container.styled";
import {ContactsWrapper} from "./Contacts.styled";
import {ForwardedRef, forwardRef, LegacyRef} from "react";

type Contacts = {
    ref: LegacyRef<HTMLDivElement>
}

const Contacts = forwardRef((props: Contacts, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <Container>
            <ContactsWrapper>
                <div className={"information_wrapper"} ref={ref}>
                    <div className={"information"}>
                        <h3 className={"title"}>Контакты</h3>
                        <span className={"text"}>
                            WhatsApp: +79851257968, Иван <br/>
                            Адрес: Ивановская область, Фурмановский район, д. Исаевское<br/>
                            <strong>Доставка на расстояние до 500км от города Иваново</strong><br/>
                        </span>
                    </div>
                        <iframe
                            title="map"
                            src="https://yandex.ru/map-widget/v1/?ll=41.134247%2C57.205335&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwNzQwNBK1AdCg0L7RgdGB0LjRjywg0JjQstCw0L3QvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCk0YPRgNC80LDQvdC-0LLRgdC60LjQuSDRgNCw0LnQvtC9LCDQqNC40YDQvtC60L7QstGB0LrQvtC1INGB0LXQu9GM0YHQutC-0LUg0L_QvtGB0LXQu9C10L3QuNC1LCDQtNC10YDQtdCy0L3RjyDQmNGB0LDQtdCy0YHQutC-0LUiCg3QYCRCFYXYZEI%2C&z=11.39"
                            width="460"
                            height="300"
                            frameBorder="1"
                            allowFullScreen
                        />
                </div>

            </ContactsWrapper>
        </Container>
    );
});

export default Contacts;