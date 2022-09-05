const Mensaje = (props) => {
    return(
    <>
    <h2>Moto</h2>
    <p>descripcion: {props.descripcion}</p>
    <p>precio: {props.precio}</p>
    <hr/>
    </>
    );
}

export default Mensaje;