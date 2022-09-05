import React from 'react';
import ResponsiveAppBar from './Components/Navbar';
import Mensaje from './Components/ItemListContainer';

const App = () => {
  return(  
    <div className='Nav'>
     <ResponsiveAppBar />
     <Mensaje descripcion="Ninja" precio="$30.000"/>
     <Mensaje descripcion ="Honda" precio ="$10.000"/>
    </div>
  );
}

export default App;
