import React from 'react';
import ResponsiveAppBar from './Components/Navbar';
import ItemListContainer from './Components/itemsList/ItemListContainer';

const App = () => {
  return(  
    <div className='Nav'>
     <ResponsiveAppBar />
     <ItemListContainer/>
    </div>
  );
}

export default App;
