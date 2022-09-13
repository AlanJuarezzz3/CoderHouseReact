import React from 'react';
import Contador from './ItemCount';
const Item = ({product}) => {
  return (
    <>
    <h2>{product.nombre}</h2>
    <div>{product.precio}</div>
    <div>{product.detalle}</div>
    <img src={product.img} alt ="imagen1" width= {150}/>
    <Contador initial ={1} stock ={10}/>
    <hr></hr>
    </>
  )
}


export default Item;