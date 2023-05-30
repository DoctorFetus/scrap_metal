import './App.css'
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import Elements from "./components/Elements/Elements";
import Purchase from "./components/Purchase/Purchase";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App() {
    return (
        <>
            <Menu/>
            <Header/>
            <Slider/>
            <Elements/>
            <Purchase />
            <Contacts />
            <Footer/>
        </>
    )
}

export default App
