import Contador from './itemCount';

const ItemListContainer = (props) => {
    return(
    <>
    <h2>Moto</h2>
    <p>descripcion: {props.descripcion}</p>
    <p>precio: {props.precio}</p>
    <Contador initial ={1} stock ={10}/>
    <hr/>
    </>
    );
}

export default ItemListContainer;