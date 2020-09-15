import React from 'react' 
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo_menu_web.png'
import LogoMobile from '../../assets/manager_mei_rojo 1 mobile.png'

import './styles.css' 


const Navbar = (props) => {

    const openMenu = () => {
        let containerMenu = document.querySelector('.container-menu div')
        let menu = document.querySelector('#menu')
        
        menu.addEventListener('click', () => {
            if(containerMenu.style.display === 'none'){
                containerMenu.style.display = 'flex'
            } else {
                containerMenu.style.display = 'none'
            }
        })
    }

    const closeMenu = () => {
        let containerMenu = document.querySelector('.container-menu div')
        let close = document.querySelector('#close')
        let menu = document.querySelector('.container-menu')

        close.addEventListener('click', () => {
            containerMenu.style.display = 'none'
        })

        close.addEventListener('click', () => {
            menu.style.display = 'none'
        })
    }

    const openMenuMobile = () => {
        let menuMobile = document.querySelector('#menuMobile')
        let menu = document.querySelector('.container-menu')
        let menuBox = document.querySelector('.container-menu div')

        menuMobile.addEventListener('click', () => {
            //menu.style.display = 'flex'

            if(menu.style.display === 'none') {
                menu.style.display = 'flex'
                menuBox.style.display = 'flex'
            } else {
                menu.style.display = 'none'
                menuBox.style.display = 'flex'
            }
        })
        
    }

    return(
        <nav className="navbar">
            {/* Brand mobile */}
            <div className="logoMobile">
                <img src={LogoMobile} alt="logo mobile"/>
            </div>

            {/* menuburguer mobile */}
            <div className="menuMobile" id="menuMobile" onClick={openMenuMobile} >
                <i className="fas fa-bars"></i>
            </div>

            <ul className="container-menu">
                <li>
                    <span id="menu" onClick={openMenu}>
                        Menu
                    </span>
                    <div>
                        <div className="brand">
                            <img src={Logo} alt="logo"/>
                        </div>
                        <ul>
                            <li>
                                <Link 
                                    to="/" 
                                    className="btn-menu"
                                >
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/config" 
                                    className="btn-menu"
                                >
                                    Configurações
                                </Link>
                            </li>
                            <li>
                                <Link to="/register-value" className="btn-menu">
                                    Registrar Receita
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    className="btn-menu"
                                    id="close"   
                                    onClick={closeMenu} 
                                >
                                    Fechar
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <h3 className="btn-secundary">
                        {props.nameBtnSecundary}
                        {/*In&iacute;cio*/}
                    </h3>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar