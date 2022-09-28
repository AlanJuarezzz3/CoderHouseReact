import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';



const Cart = () => {
  const ctx  = useContext(CartContext);

    return(
        <>
            <h1>Carrito</h1>
            <Button onClick={ctx.clear}>Borrar Todo</Button>
            <Link to ='../category/Motos'><Button>Volver a Motos</Button></Link>
            <Link to ='../category/Productos'><Button>Volver a Productos</Button></Link>
            {       
                ctx.cartList.map(product => 
                <div className="container">
                <table>
                    <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>cantidad</th>
                    <th>precio total</th>
                    </tr>
                    </thead>
                <tr>
                    <td>{product.nombre}</td>
                    <td>${product.precio}</td>
                    <td>{product.cantidad}</td>
                    <td>${product.precio*product.cantidad}</td>
                    <td><Button onClick={()=>ctx.removeItem(product.id)}>Eliminar</Button></td>
                </tr>
                </table>
                </div>)
            }
            <div>
            <h3>Monto total de compra: ${ctx.totalProductPrice()}</h3>
            <Button>Terminar Compra</Button>
            </div>
        </>
    )
}

export default Cart;