
import {Routes , Route} from 'react-router-dom'; 
import Home from './Component/Home/Home'
import News from './Component/News/News'
import FavDeals from './Component/FavDeal/FavDeals';
import NewsAboutGame from './Component/NewsGame/NewsAboutGame';
function App() {
  return (
   <>
   <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path='/News' element={<News/>} />
     <Route path='/FavDeals' element={<FavDeals/>}/>
      <Route path='/:title' element={<NewsAboutGame/>}/>
    </Routes>
   </>

  );
}

export default App;
