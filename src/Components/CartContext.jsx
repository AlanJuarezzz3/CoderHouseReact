import {createContext, useState} from 'react'

export const CartContext = createContext();

const CartContexProvider = ({children}) =>{
    const [cartList, setCartList] = useState([]);

    const addItem = (product, cantidad) => {

        product.cantidad=cantidad;
        setCartList([...cartList, product]);
    }

    const clear = () =>{
        setCartList([]);
    }

    const removeItem = (id) =>{
        setCartList(cartList.filter(product => product.id !== id))
    }

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContexProvider;