import React from 'react'

import Navbar from '../../components/NavBar'
import BoxHome from '../../components/Box/BoxHome'
import Footer from '../../components/Footer'


import './style.css'

const Home = () => {
    return (
        <section className="container-home">
            <Navbar 
                nameBtnSecundary="In&iacute;cio"
            />
            <BoxHome />
            <Footer
                paragraph="Desenvolvido por Dennis J Carvalho"
            />
            
        </section>
    )
}

export default Home