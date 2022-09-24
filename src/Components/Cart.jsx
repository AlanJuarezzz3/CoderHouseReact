import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from '@mui/material/Button';

const Cart = () =>{
  const ctx = useContext(CartContext);

    return(
        <>
            <h1>Carrito</h1>
            <Button onClick={ctx.clear}>Borrar Todo</Button>
            {       
                ctx.cartList.map(product => <li>
                {product.nombre}  
                Precio Unitario:${product.precio} 
                Cantidad:{product.cantidad} 
                Precio total:${product.precio*product.cantidad}
                <Button onClick={()=>ctx.removeItem(product.id)}>Deletear</Button>
                </li>)
            }
        </>
    )
}

export default Cart;