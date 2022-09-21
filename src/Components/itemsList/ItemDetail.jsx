import React, { useState } from "react";
import Card from '@mui/material/Card';
import Contador from './ItemCount';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const ItemDetail = ({product}) =>{

    const [itemCount, setItemCount] = useState(0);
    
    const onAdd =(qty) =>{
    alert("seleccionaste " + qty + "product.");
    setItemCount(qty);
}

    return(
        <>
        <Card sx={{maxWidth: 320}}>
        <img width={284} height={188} src={product.img} alt i="magen1"/>
        <Typography variant="body2" color="text.secondary">
        <h2>{product.precio}</h2>
        <h3>{product.stock}</h3>
        </Typography>
        <Contador initial ={0} stock ={10}/>
        {
            Contador === 0
            ?<Contador stock={product.stock} initial={Contador} onAdd={onAdd}/>
            :<Link to='cart'><Button variant="container">verificacion</Button></Link>
        }
        </Card>
        </>
    )
}

export default ItemDetail;