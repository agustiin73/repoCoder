import React from 'react'
import './NavBar.css'
import {NavLink} from 'react-router-dom'
import Cart from './Cart'

const NavBar = ()=>{
    return(
        <div className="btn-group">
          
          <NavLink to="/category" className="btn btn-dark" activeClassName="active">
            Productos
          </NavLink>
          <NavLink to="/Marcas" className="btn btn-dark" activeClassName="active">
            Marcas
          </NavLink>
          <NavLink to="/Sucursales" className="btn btn-dark" activeClassName="active">
            Sucursales
          </NavLink>
          <NavLink to="/Contacto" className="btn btn-dark" activeClassName="active">
            Contacto
          </NavLink>
          <Cart/>
        </div>
           
 
    )
}

export default NavBar;