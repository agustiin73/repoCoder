import React, { useEffect, useState} from 'react'
import Item from '../Item/Item.jsx'
import  './ItemList.css'
import imagenes from '../imagenes.js'
import {NavLink,Link,ReactFragment} from 'react-router-dom'



const ItemList = () =>{
    const [items, setItems] = useState([]);
    useEffect(()=>{
        const promesa = new Promise((resolve,reject)=>{
            const productos = [
                <Item  id="0" title="Aletas Pro Light" description="Aletas cerradas deportivas de talón abierto. Posee gran rendimiento propulsivo." price="9.950"  brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item  id="1" title="Aletas Pro Light" description="Aletas cerradas deportivas de talón abierto. Posee gran rendimiento propulsivo." price="9.950"  brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item  id="2" title="Aletas Pro Light" description="Aletas cerradas deportivas de talón abierto. Posee gran rendimiento propulsivo." price="9.950"  brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item  id="3" title="Aletas Pro Light" description="Aletas cerradas deportivas de talón abierto. Posee gran rendimiento propulsivo." price="9.950"  brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item  id="4" title="Aletas Pro Light" description="Aletas cerradas deportivas de talón abierto. Posee gran rendimiento propulsivo." price="9.950"  brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item  id="5" title="Aletas Pro Light" description="Aletas cerradas deportivas de talón abierto. Posee gran rendimiento propulsivo." price="9.950"  brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item  id="6" title="Aletas Pro Light" description="Aletas cerradas deportivas de talón abierto. Posee gran rendimiento propulsivo." price="9.950"  brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>,
                <Item  id="7" title="Aletas Pro Light" description="Aletas cerradas deportivas de talón abierto. Posee gran rendimiento propulsivo." price="9.950"  brandPicture={imagenes.logo_cressi} productPicture={imagenes.cressi_aletas}/>
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
            <React.Fragment>
            {
               items.map((item,id)=>
               <Link key={id} to={`/item/${id}`}>
                    <div>
                        {item}  
                    </div>
               </Link>
            )}
            </React.Fragment>
           
        </div>
    );
}

export default ItemList;