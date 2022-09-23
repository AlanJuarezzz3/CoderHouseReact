import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from '@mui/material/Button';
import Li from '@mui/material/List';

const Cart = () =>{
  const ctx = useContext(CartContext);

    return(
        <>
            <h1>carrito</h1>
            <Button onClick={ctx.clear}>Borrar Todo</Button>
            {       
                ctx.cartList.map(product => <Li>{product.nombre}  {product.precio}<Button onClick={()=>ctx.removeItem(product.id)}>Deletear</Button></Li>)
            }
        </>
    )
}

export default Cart;