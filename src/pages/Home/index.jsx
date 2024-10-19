import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Main from "../../components/Main/Main";
import Nav from "../../components/Nav/Nav";
import './index.css';

function Home() {
    return(
        <>
        <Nav/>
        <Banner/>
        <Main/>
        <Footer/>
        </>
    )
}

export default Home;