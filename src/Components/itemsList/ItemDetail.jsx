import React, { useState } from "react";
import Card from '@mui/material/Card';
import Contador from './ItemCount';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { CartContext } from "../CartContext";


const ItemDetail = ({product}) =>{

    const [itemCount, setItemCount] = useState(0);
    const ctx = useContext(CartContext);

    const onAdd = (stock) => {
    alert("seleccionaste " + stock  + " productos.");
    setItemCount(stock);
    ctx.addItem(product, stock);
}

    return(
        <>
        <Card sx={{maxWidth: 320}}>
        <img width={284} height={188} src={product.img} alt="magen1"/>
        <Typography variant="body2" color="text.secondary">
        <h2>${product.precio}</h2>
        <h3>El stock es: {product.stock}</h3>
        </Typography>
        {
            itemCount === 0
            ?<Contador stock={product.stock} initial={1} onAdd={onAdd}/>
            :<Link to='/cart'><Button variant="container">verificacion</Button></Link>
        }
        </Card>
        </>
    )
}

export default ItemDetail;