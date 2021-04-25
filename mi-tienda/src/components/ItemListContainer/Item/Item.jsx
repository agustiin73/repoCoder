import react from 'react'
import './Item.css'
import ItemCount from './ItemCount.jsx'
const Item =( props) =>{
    return(
        <div className='Item'>
            <img src={props.brandPicture} alt="" className="brandImage"/>
            <img src={props.productPicture} alt="" className="productImage"/>
            <h3>{props.title}</h3>
            <p className="productDescription">{props.description}</p>
            <h3>$ {props.price}</h3>
            <ItemCount/>
            
        </div>
    )
}

export default Item;