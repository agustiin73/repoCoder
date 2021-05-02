import React from 'react'
import './ItemDetail.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemCount from '../Item/ItemCount'

export default function ItemDetail(props) {
    
    
    return(
        <div className="tarjetaDetalle">
                <div className="imagenProducto">
                <img src={props.productPicture} alt=""/>
            </div>
            <div className="descripcionProducto">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <h2>${props.price}</h2>
                <ItemCount/>
            </div>
        </div>
        
    )
}

