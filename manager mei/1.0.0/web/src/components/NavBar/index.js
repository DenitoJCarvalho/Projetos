import React from 'react' 

import logo from '../../assets/manager_mei_rojo 1 - smart.png'

import './styles.css' 


const Navbar = () => {
    return(
        <nav className="container">
            <div className="brand">
                <img src={logo} alt="logo" />
            </div>
            <div className="menuBurguer">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar
