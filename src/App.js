
import {Routes , Route} from 'react-router-dom'; 
import Home from './Component/Home/Home'
import News from './Component/News/News'
import FavDeals from './Component/FavDeal/FavDeals';
import AboutUs from './Component/AboutUs/AbouUs';
function App() {
  return (
   <>
   <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path='/News' element={<News/>} />
     <Route path='/FavDeals' element={<FavDeals/>}/>
      <Route path='/AboutUs' element={<AboutUs />} />
    </Routes>
   </>

  );
}

export default App;
