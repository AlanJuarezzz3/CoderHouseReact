import React from 'react'
import {useState, useEffect} from 'react'
import Button from '@mui/material/Button';

const Contador = ({initial, stock}) => {

    const [contador, setContador] = useState(initial);
    const [agregadoAlCarro, setAgregadoAlCarro] = useState (false);

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
    const agregarAlCarro =() =>
    {
        setContador(contador);
        setAgregadoAlCarro(agregadoAlCarro)
        console.log("agregado");
    };
    useEffect (()=>{
        console.log("ejecutado");
        return()=>{
            <h1>Boeeeeeeenas</h1>
        }
    },[agregadoAlCarro])
    
  return (
    <>
        <Button onClick={()=> restar()}>-</Button>
        <span>{contador}</span>
        <Button onClick={()=> sumar()}>+</Button>
        <Button onClick={()=> agregarAlCarro()}>Agregar al Carrito</Button>
    </>
  )
}

export default Contador;