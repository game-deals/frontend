import GameDeals from "../GamesDeals/GameDeals";
import NavBars from "../NavBar/NavBars";
import Poster from "../Poster/Poster";
import './Home.css'
function Home (){
    return(
        <>
        <NavBars/>
    <Poster/>
    <GameDeals/>
        </>
    )

}

export default Home;