
import {Routes , Route} from 'react-router-dom'; 
import FavDeals from './Component/FavDeals';
function App() {
  return (
   <>
   <Routes >
    <Route path='/FavDeals' element={<FavDeals />}>  </Route>

    </Routes>
   </>
  );
}

export default App;
