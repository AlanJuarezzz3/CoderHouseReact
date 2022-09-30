import React, {useState, useEffect} from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import {db} from '../../firebaseConfig';
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {

const [listProducts, setListProducts] = useState ([])
const {categoria} = useParams()

  //firebase
      useEffect(()=>{
        const getData = async ()=>{
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map(product => ({
          id: product.id,
          ...product.data()
        }))
          setListProducts(dataFromFirestore)
      }
      getData();
    }, [categoria]);

    return(
    <>
    <div><ItemList listProducts={listProducts}/></div>
    </>
    );
  }

export default ItemListContainer;