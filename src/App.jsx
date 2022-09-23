import React from 'react';
import ResponsiveAppBar from './Components/Navbar';
import ItemListContainer from './Components/itemsList/ItemListContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './Components/itemsList/ItemDetailContainer';
import Cart from './Components/Cart';
import CartContextProvider  from './Components/CartContext';

const App = () => {
  return( 
    <CartContextProvider>
    <div className='Nav'>
    <Router>
     <ResponsiveAppBar />

     <Routes>
      <Route path='/' element ={<ItemListContainer/>}/>
      <Route path ='category/:categoria' element={<ItemListContainer/>}/>
      <Route path ='item/:id' element={<ItemDetailContainer/>}/>
      <Route path ='/:cart' element={<Cart/>}/>
     </Routes>
    
    </Router>
    </div>
    </CartContextProvider>
  );
}

export default App;
