import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo1 from "../../common/images/1.jpg"
import photo3 from "../../common/images/2.jpg"
import photo4 from "../../common/images/3.jpg"
import photo5 from "../../common/images/4.jpg"
import {SliderContainer, Titles} from "./Slider.styled";
import {forwardRef, LegacyRef} from "react";

type SliderProps = {
    ref:  LegacyRef<HTMLDivElement>
}

const Slider = forwardRef((props: SliderProps, ref) => {

    const imgStyle = {filter: "brightness(60%)"}

    return <SliderContainer ref={ref}>
        <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
            <div>
                <img style={imgStyle} src={photo1} alt="1"/>
                <Titles>
                    <h1 className={"big_title"}>Металлолом длительного хранения (копанный)</h1>
                    {/*<h2 className={"sub_title"}>Еженедельно отгружаем 60 тонн </h2>*/}
                </Titles>
            </div>
            <div>
                <img style={imgStyle} src={photo3} alt="3"/>
                <Titles>
                    <h2 className={"big_title"}>15 тысяч рублей за тонну</h2>
                </Titles>
            </div>
            <div>
                <img style={imgStyle} src={photo4} alt="4"/>
                <Titles>
                    <h2 className={"big_title"}>Доставка до 500км от Иваново</h2>
                </Titles>
            </div>
            <div>
                <img style={imgStyle} src={photo5} alt="5"/>
                <Titles>
                    <h2 className={"big_title"}>Еженедельно отгружаем 60 тонн</h2>
                </Titles>
            </div>
        </Carousel>
    </SliderContainer>
})

export default Slider