import react from 'react'
import './ItemListContainer.css'
import Item from '../Item/Item.jsx'
import imagenes from './imagenes.js'


const ItemListContainer = (props)=>{
    return(
        <div className="ItemContainer">
            <h1 className="ItemListTitle">{props.greeting}</h1>
            <div className="ItemListContainer">

                <Item id="1"
                    brandPicture = {imagenes.logo_cressi}
                    productPicture = {imagenes.cressi_aletas} 
                    title="Producto 1"
                    description="Producto de buceo primario para el agua"
                    price = "1055.3"

                />
                <Item title="Producto 2" description="Producto de buceo primario para el agua"/>
                <Item title="Producto 3" description="Producto de buceo primario para el agua"/>
   

            </div>
        </div>
        
    )
}

export default ItemListContainer;