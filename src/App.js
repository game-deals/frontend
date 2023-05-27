
import {Routes , Route} from 'react-router-dom'; 
import FavDeals from './Component/FavDeals';
import Home from "./Component/Home";
import News from './Component/News';
function App() {
  return (
   <>
   <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path='/FavDeals' element={<FavDeals />}>  </Route>
    <Route path='/News' element={<News/>} /> 
    </Routes>
   </>

  );
}

export default App;
