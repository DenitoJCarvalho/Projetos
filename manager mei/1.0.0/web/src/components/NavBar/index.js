import React from 'react' 
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo_menu_web.png'

import './styles.css' 


const Navbar = () => {

    const fadeMenu = () => {
        let containerMenu = document.querySelector('.container-menu')
        let menu = document.querySelector('#menu')

        menu.addEventListener('mouseover', () => {
            if(containerMenu.style.display === 'none'){
                containerMenu.style.display = 'flex'
            } else {
                containerMenu.style.display = 'none'
            }
        })
    }

    return(
        <nav className="navbar">
            <ul>
                <li 
                    id="menu"
                    onClick={fadeMenu}
                >
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
