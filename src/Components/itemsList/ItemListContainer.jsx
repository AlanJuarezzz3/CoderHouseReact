import React, {useState, useEffect} from 'react';
import products from '../../products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";



const ItemListContainer = () => {

const [listProducts, setListProducts] = useState ([])
const {categoria} = useParams()

    /* const customFetch =(items) =>{
      return new Promise((resolve) => {
          setTimeout(() =>{
            if (categoria){
              resolve(products.filter((item)=>item.categoria === categoria));  
            }else resolve (products);
              resolve(items);
          }, 2000);
      });
  }; */
  //firebase
      useEffect(async ()=>{
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.maps(product => ({id: product.id,
          ...product.data()
        }))
          setListProducts(dataFromFirestore)
      },[categoria]);

    /* useEffect(() => {
      customFetch(products)
      .then(data=> setListProducts(data))
    },[categoria])
     */
      useEffect(()=>{
        return (()=>{
          setListProducts([]);
        })
      }, []);

    return(
    <>
    <div><ItemList listProducts={listProducts}/></div>
    </>
    );
}

export default ItemListContainer;