import React from 'react'
import NavButton  from './NavButton.js'
import './NavBar.css'
const NavBar = ()=>{
    return(
        <div className='navBarStyle'>
                <NavButton text={'Home'}/>
                <NavButton text={'Marcas'}/>
                <NavButton text={'Sucursales'}/>
                <NavButton text={'Contacto'}/>
                <NavButton text={'Nosotros'}/>
        </div>
           
 
    )
}

export default NavBar