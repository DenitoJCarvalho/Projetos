import React from 'react' 
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo_menu_web.png'
import LogoMobile from '../../assets/manager_mei_rojo 1 mobile.png'

import './styles.css' 


const Navbar = () => {

    const openMenu = () => {
        let containerMenu = document.querySelector('.container-menu')
        let menu = document.querySelector('#menu')
        

        menu.addEventListener('click', () => {
            if(containerMenu.style.display === 'none'){
                containerMenu.style.display = 'flex'
            } else {
                containerMenu.style.display = 'none'
            }
        })
    }

    const openMenuMobile = () => {
        let containerMenu = document.querySelector('.container-menu')
        let menuMobile = document.querySelector('#menuMobile')

        menuMobile.addEventListener('click', () => {
            if(containerMenu.style.display === 'none'){
                containerMenu.style.display = 'flex'
            } else {
                containerMenu.style.display = 'none'
            }
        })
    }

    return(
        <nav className="navbar">
            {/* Brand mobile */}
            <div className="logoMobile">
                <img src={LogoMobile} alt="logo mobile"/>
            </div>

            <ul>
                {/* menuburguer mobile */}
                <div className="menuMobile" id="menuMobile" onClick={openMenuMobile} >
                    <i className="fas fa-bars"></i>
                </div>
                <li id="menu" onClick={openMenu}>
                    Menu
                    <div className="container-menu">
                        <div className="brand">
                            <img src={Logo} alt="logo"/>
                        </div>
                        <ul>
                            <li>
                                <Link to="/" className="btn-menu">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="btn-menu">
                                    Configurações
                                </Link>
                            </li>
                            <li>
                                <Link to="" className="btn-menu">
                                    Registrar Receita
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className="btn-menu"
                                    id="close"   
                                    /*onClick={closeMenu}*/ 
                                >
                                    Fechar
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/" className="btn-secundary">
                        In&iacute;cio
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar