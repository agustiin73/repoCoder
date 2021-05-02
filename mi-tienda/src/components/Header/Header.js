import React from 'react'
import './Header.css'
import NavBar from './NavBar'
import {NavLink} from 'react-router-dom'


const Header = ()=>{
    return(
        <div className=" header">
            <NavLink to="/" className="btn btn-dark" activeClassName="active">
                <h1>Mi Tienda Online</h1>
            </NavLink>
            
            <NavBar/>
        </div>
    )
}


export default Header;
