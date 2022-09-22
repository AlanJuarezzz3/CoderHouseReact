import React from 'react'
import {useState} from 'react'
import Button from '@mui/material/Button';

    const Contador = ({initial, stock, onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumar =() =>{
        if (contador < stock){
        setContador (contador +1);
        }
    }
    const restar = () =>{
        if(contador > initial){
        setContador(contador -1);
        }
    }

  return (
    <>
        <Button onClick={()=> restar()}>-</Button>
        <span>{contador}</span>
        <Button onClick={()=> sumar()}>+</Button>
        <Button onClick={()=> onAdd(contador)}>Agregar al Carrito</Button>
    </>
  )
}

export default Contador;