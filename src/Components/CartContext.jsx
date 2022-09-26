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

   /*  const calcItemQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousVale, currentValue)=> previousVale + currentValue),0);
    } */

    return(
        <CartContext.Provider value={{cartList, addItem, clear, removeItem}}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContexProvider;