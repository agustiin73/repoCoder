import react, {Component, useEffect, useState} from 'react'
import Item from '../Item/Item.jsx'
import  './ItemList.css'
import imagenes from '../imagenes.js'



const ItemList = () =>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const promesa = new Promise((resolve,reject)=>{
            const productos = [
                <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_orca} productPicture={imagenes.cressi_aletas}/>,
                <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_quiksilver} productPicture={imagenes.quiksilver_snorkel}/>,
                <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_scubapro} productPicture={imagenes.cressi_aletas}/>,
                <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item title="Producto 1" description="Descripcion" price="1055.3" brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>
            ]
            setTimeout(()=>{
                resolve(productos);
            },3000);
            
        });
        promesa.then(res=>{
            setItems(res);
        });
    },[]);
    return(
        <div className="ItemList">
           {
               items.map((item)=><div>{item}</div>)
           }
        </div>
    );
}

export default ItemList;