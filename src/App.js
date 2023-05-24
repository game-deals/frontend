

import {Routes , Route} from 'react-router-dom'; 
import FavDeals from './Component/FavDeals';
import Home from "./Component/Home";
function App() {
  return (
   <>
   <Routes >
    <Route path="/" element={<Home/>}/>
    <Route path='/FavDeals' element={<FavDeals />}>  </Route>

    </Routes>
   </>

  );
}

export default App;
