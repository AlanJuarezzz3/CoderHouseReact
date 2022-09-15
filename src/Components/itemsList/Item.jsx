import React from 'react';
import Contador from './ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

const Item = ({product}) => {
  return (
    <Card sx={{maxWidth: 320}}>
      <img src={product.img} alt i="magen1"/>
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
      <Link to = {`/item/${product.id}`}><Button>Detalle</Button></Link>
      </CardActions>
      <hr></hr>
    </Card>
  );
}

export default Item;
