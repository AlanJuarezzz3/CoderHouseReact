import React from 'react';
import ResponsiveAppBar from './Components/Navbar';
import ItemListContainer from './Components/itemsList/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/itemsList/ItemDetailContainer';

const App = () => {
  return( 
    <div className='Nav'>
    <Router>
     <ResponsiveAppBar />

     <Routes>
      <Route path='/' element ={<ItemListContainer/>}/>
      <Route path ='category/:categoria' element={<ItemListContainer/>}/>
      <Route path ='item/:id' element={<ItemDetailContainer/>}/>
     </Routes>
    
    </Router>
    </div>
  );
}

export default App;
