import React from 'react';
import Card from '@mui/material/Card';

const ItemDetail = ({product}) =>{
    return(
        <>
        <Card sx={{maxWidth: 320}}>
        <img src={product.img} alt i="magen1"/>
        </Card>
        </>
    )
}

export default ItemDetail;