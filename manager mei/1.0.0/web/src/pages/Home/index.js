import React from 'react'
import { Link } from 'react-router-dom'


//images
import logo from '../../assets/manager_mei_rojo 2.png'

//format
import './styles.css'

const Home = () => {
    return (
        <div className="main">
            <img src={logo} alt="logo" />

            <Link className="btn">Entrar</Link>
        </div>
    )
}

export default Home