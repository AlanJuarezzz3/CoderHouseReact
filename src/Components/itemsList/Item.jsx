import React from 'react';
import Contador from './ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Item = ({product}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <img src={product.img} alt ="imagen1" width= {150}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {product.nombre}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <div>{product.detalle}</div>
        </Typography>
      </CardContent>
      <CardActions>
      <Contador initial ={1} stock ={10}/>
      </CardActions>
      <hr></hr>
    </Card>
  );
}

export default Item;
