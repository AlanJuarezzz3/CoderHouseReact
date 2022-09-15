import React, {useState, useEffect} from 'react';
import products from '../../products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {

    const [listProducts, setListProducts] = useState ([])
const {categoria} = useParams()
    console.log(categoria);

    const customFetch =(items) =>{
      return new Promise((resolve, reject) => {
          setTimeout(() =>{
            if (categoria){
              resolve(products.filter((item)=>item.categoria == categoria));  
            }else resolve (products);
              resolve(items);
          }, 2000);
      });
  };

    useEffect(() => {
      customFetch(products)
      .then(data=> setListProducts(data))
    },[categoria])
    

    console.log(listProducts)
    return(
    <>
    <div><ItemList listProducts={listProducts}/></div>
    </>
    );
}

export default ItemListContainer;