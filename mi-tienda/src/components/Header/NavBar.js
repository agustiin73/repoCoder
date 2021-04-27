import React from 'react'
import NavButton  from './NavButton.js'
import './NavBar.css'
const NavBar = ()=>{
    return(
        <div className='navBar'>
                <NavButton text={'Productos'}/>
                <NavButton text={'Marcas'}/>
                <NavButton text={'Sucursales'}/>
                <NavButton text={'Contacto'}/>

        </div>
           
 
    )
}

export default NavBar