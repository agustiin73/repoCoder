import react from 'react'
import './ItemListContainer.css'
const ItemListContainer = (props)=>{
    return(
    <div className='itemListStyle'>
        <p className='textStyle'>
            {props.greeting}
        </p>
    </div>
    )
}

export default ItemListContainer;