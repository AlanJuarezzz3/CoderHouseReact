import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import products from "../../products";
// import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer =() =>{
    //nuevo[
    /* const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef); */
   //]
    const [item, setItem] = useState({})
    const {id} = useParams()
// [
     const customFetch =(productos) =>{
        return new Promise((resolve) => {
            setTimeout(() =>{
                if(id){
                    resolve(products.find((item) => item.id == id));  
                }else resolve(productos);
            }, 2000);
        });
    };
    //hay que modificar]
    useEffect(()=>{
         setTimeout(()=>{
            customFetch(id)
            .then(data => {setItem(data)})
        },2000); 
      /*   if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          } */
    }, [id])

    return(
        <>
            <ItemDetail product = {item}/>
        </>
    )
}


export default ItemDetailContainer;

