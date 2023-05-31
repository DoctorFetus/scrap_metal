import './App.css'
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Elements from "./components/Elements/Elements";
import Purchase from "./components/Purchase/Purchase";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {useRef} from "react";

function App() {

    const metalRef = useRef(null)
    const informationRef = useRef(null)
    const contactsRef = useRef(null)

    const scrollToRef = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    const navigationProps = {
        scrollToRef, contactsRef, informationRef, metalRef
    }

    return (
        <>
            <Menu
                {...navigationProps}
            />
            <Header
                {...navigationProps}
            />
            <Slider ref={metalRef}/>
            <Elements ref={informationRef}/>
            <Purchase />
            <Contacts ref={contactsRef}/>
            <Footer/>
        </>
    )
}

export default App
