import React from 'react'
import carrito from '../../images/recursos/carrito.png'
import './Cart.css'

export default function Cart (){
    return(
        <div className="carritoFondo">
            <img className="carritoEstilo" src={carrito} alt=""/>
        </div>
    )
}