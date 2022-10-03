import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import db from '../../firebaseConfig';
import { collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {

const [listProducts, setListProducts] = useState ([])
const {idCategoria} = useParams()

      useEffect(()=>{
        if(idCategoria){
          const getData = async ()=>{
            const q = query(collection(db, "products"), where('categoria', '==', idCategoria))
            const querySnapshot = await getDocs(q);
            const dataFromFirestore = querySnapshot.docs.map(product => ({
              id: product.id,
              ...product.data()
            }))
              setListProducts(dataFromFirestore)
          }
          getData();
          
        }else{
        const getData = async ()=>{
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map(product => ({
          id: product.id,
          ...product.data()
        }))
          setListProducts(dataFromFirestore)
      }
      getData();
    }
    }, [idCategoria]);

    return(
    <>
    <div><ItemList listProducts={listProducts}/></div>
    </>
    );
  }

export default ItemListContainer;