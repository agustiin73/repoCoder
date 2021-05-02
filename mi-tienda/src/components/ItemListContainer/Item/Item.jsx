import React from 'react'
import './Item.css'
import ItemCount from './ItemCount.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
const Item =( props) =>{
    return(
        <div className="Item ">
            <img src={props.brandPicture} alt="" className="brandImage"/>
            <img src={props.productPicture} alt="" className="productImage"/>
            <h5>{props.title}</h5>
            <p className="productDescription">{props.description}</p>
            <h5>$ {props.price}</h5>
           
        </div>
        

     
    )
}

export default Item;