import Footer from "../Footer/Footer";
import GameDeals from "../GamesDeals/GameDeals";
import Header from "../Header/Header";
import NavBars from "../NavBar/NavBars";
import Poster from "../Poster/Poster";
import './Home.css'
function Home (){
    return(
        <>
        <NavBars/>
        <Header/>
    <Poster/>
    <GameDeals/>
    <Footer/>
        </>
    )

}

export default Home;