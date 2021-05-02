import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import imagenes from '../imagenes'
import './ItemDetailContainer.css'


export default function ItemDetailContainer (props){
    const [item,setItem] = useState([]);
    useEffect(()=>{
        const promesa = new Promise((resolve,reject)=>{
            const producto = [
                <ItemDetail id="0"  title="Aletas Pro Light" description="Aletas cerradas deportivas de talón abierto. Posee gran rendimiento propulsivo." price="1055.3" brandPicture={imagenes.logo_cressi}  productPicture={imagenes.cressi_aletas}/>
            ]
            setTimeout(()=>{
                resolve(producto);
            },2000);
            
        });
        promesa.then(res=>{
            setItem(res);
        });
    },[]);

    const {id} = useParams()
    console.log(id);

    return(
        <div className="Container">
            {
            item.map((item,id)=>
                <div className="fondoDetalle">
                    {item} 
                </div>
            )}
        </div>
    )
    
}
