import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import photo1 from "../../common/images/1.jpg"
import photo2 from "../../common/images/2.jpg"
import photo3 from "../../common/images/3.jpg"
import photo4 from "../../common/images/4.jpg"
import photo5 from "../../common/images/5.jpg"
import {SliderContainer, Titles} from "./Slider.styled";

const Slider = () => {

    const imgStyle = {filter: "brightness(60%)"}

    return <SliderContainer>
        <Carousel autoplay showThumbs={false} showStatus={false}>
            <div>
                <img style={imgStyle} src={photo1} alt="1"/>
            </div>
            <div>
                <img style={imgStyle} src={photo2} alt="2"/>
            </div>
            <div>
                <img style={imgStyle} src={photo3} alt="3"/>
            </div>
            <div>
                <img style={imgStyle} src={photo4} alt="4"/>
            </div>
            <div>
                <img style={imgStyle} src={photo5} alt="5"/>
            </div>
        </Carousel>
        <Titles>
            <h1>Металлолом длительного хранения (копанный)</h1>
            <h2>Еженедельно отгружаем 60 тонн </h2>
        </Titles>
    </SliderContainer>
}

export default Slider