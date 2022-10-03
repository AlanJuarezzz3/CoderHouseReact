import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import db from '../../firebaseConfig';
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer =() =>{
    const [item, setItem] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        const getDetail = async () => {
            const docRef = doc(db,"products", id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()){
                setItem({ id: docSnap.id, ...docSnap.data()});
            }else{
                console.log("no documento");
            }
        }
        getDetail();
    }, [id])

    return(
        <>
            <ItemDetail product = {item}/>
        </>
    )
}

export default ItemDetailContainer;

