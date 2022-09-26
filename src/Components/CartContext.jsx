import {createContext, useState} from 'react'

export const CartContext = createContext();

const CartContexProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);

    const addItem = (product, cantidad) => {   
        if (isinCart(product.id)) 
            {
                console.log(cartList)
            setCartList(cartList.map(producto => product.id == producto.id ? {
                ...producto, cantidad : cantidad + producto.id
            }: producto
            ))
            console.log(cartList)
        } else {
            product.cantidad=cantidad;
            setCartList([...cartList, product]);
        }
    }
    const clear = () =>{
        setCartList([]);
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter(product => product.id !== id))
    }

    const sumaCarrito = () =>{
        let arrayCantidad = cartList.map(item=>item.cantidad)
        return arrayCantidad.reduce((acumulador, cantidad)=>acumulador+=cantidad, 0)
    }
    
    const isinCart =(id) => {
        return cartList.find(product => product.id != id)
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem, sumaCarrito}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContexProvider;