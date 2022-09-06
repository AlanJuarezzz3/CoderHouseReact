import React from 'react';
import ResponsiveAppBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';

const App = () => {
  return(  
    <div className='Nav'>
     <ResponsiveAppBar />
     <ItemListContainer descripcion="Ninja" precio="$30.000"/>
     <ItemListContainer descripcion ="Honda" precio ="$10.000"/>
    </div>
  );
}

export default App;
