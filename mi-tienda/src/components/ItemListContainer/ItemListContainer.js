import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList/ItemList.jsx'



const ItemListContainer = (props)=>{
    return(
        <div className="ItemContainer">
            <h1 className="ItemListTitle">{props.title}</h1>
            <ItemList/>
        </div>
        
    )
}

export default ItemListContainer;