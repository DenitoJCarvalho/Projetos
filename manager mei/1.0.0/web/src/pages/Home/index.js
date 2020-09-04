import React from 'react'

import Navbar from '../../components/NavBar'
import Box from '../../components/Box'
import Footer from '../../components/Footer'


import './style.css'

const Home = () => {
    return (
        <section className="container">
            <Navbar 
                nameBtnSecundary="In&iacute;cio"
            />
            <Box />
            <Footer
                paragraph="Desenvolvido por Dennis J Carvalho"
            />
            
        </section>
    )
}

export default Home