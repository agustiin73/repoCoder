import react, {Component} from 'react'
import Item from '../Item/Item.jsx'
import  './ItemList.css'
import imagenes from '../imagenes.js'

export class ItemList extends Component{
    constructor(props){
        super(props)
        this.state = {
            objetos:[
            <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
            <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_orca} productPicture={imagenes.cressi_aletas}/>,
            <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
            <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_quiksilver} productPicture={imagenes.quiksilver_snorkel}/>,
            <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_scubapro} productPicture={imagenes.cressi_aletas}/>,
            <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
            <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
            <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
            
          
            ]
        }
    }
    
    render(){
        return(
            <div className="ItemList">
                {
                    this.state.objetos.map((objeto, index)=>{
                        return(
                            <div key={index} className="ItemList">{objeto}</div>
                            
                        )
                    })
                }
                
                
            </div>
        )
    }
    
}

export default ItemList;