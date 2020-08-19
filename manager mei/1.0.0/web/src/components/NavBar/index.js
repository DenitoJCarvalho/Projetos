import React from 'react' 
import { Link } from 'react-router-dom'

import Logo from '../../assets/logo_menu_web.png'

import './styles.css' 


const Navbar = () => {
    return(
        <nav className="navbar">
            <ul>
                <li>
                    Menu
                    <div className="container-menu">
                        <div className="brand">
                            <img src={Logo} alt="logo"/>
                        </div>
                        <ul>
                            <li>
                                <Link>
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Configurações
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    Registrar Receita
                                </Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/MainBox">
                        In&iacute;cio
                    </Link>
                </li>
            </ul>
            
        </nav>
    )
}

export default Navbar
