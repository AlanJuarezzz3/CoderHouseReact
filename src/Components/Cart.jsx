import { useContext } from "react";
import { CartContext } from "./CartContext";
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import db from '../../firebaseConfig';



const Cart = () => {
  const ctx  = useContext(CartContext);

    const createOrder = async () =>{
        const itemsForDB = ctx.cartList.map(item => ({
            id: item.id,
            title: item.nombre,
            price: item.precio,
            quantity: item.cantidad
        }))

        let order = {
            buyer:{
                name:"",
                email:"",
                phone:"",
            },
            items: itemsForDB,
            date: serverTimestamp(),
            total: ctx.totalProductPrice(),
        }

        const newOrderRef = doc(collection(db, "orders"))
        await setDoc(newOrderRef,order)

        ctx.cartList.forEach(async(item) => {
            const itemRef = doc (db, "products", item.id);
            await updateDoc (itemRef, {
                stock: increment(-item.cantidad)
            });
        })
        ctx.clear()
        alert ('su orden fue realizada' + newOrderRef.id)
    }

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
            <Button onClick={createOrder}>Terminar Compra</Button>
            </div>
        </>
    )
}

export default Cart;