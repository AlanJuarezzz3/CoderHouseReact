import React from 'react'
import {useState, useEffect} from 'react'

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
        <button onClick={()=> sumar()}>+</button>
        <button onClick={()=> restar()}>-</button>
        <spam>{contador}</spam>
        <button onClick={()=> agregarAlCarro()}>Agregar al Carrito</button>
    </>
  )
}

export default Contador