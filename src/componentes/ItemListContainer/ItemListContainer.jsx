import React  from 'react'
import {useState} from 'react'

const ItemListContainer = ({greeting}) => {
    const [show, setShow] = useState(false);

        function handleShow (){
            setShow (!show);
        }  
    return(
        <div className='saludo'>          
            <button className='botonBienvenida' onClick={handleShow}>{show === true ? "Ocultar" : "Mostrar"}</button>
            {show && <h2>{greeting}</h2>}
        </div>
    )
}
export default ItemListContainer