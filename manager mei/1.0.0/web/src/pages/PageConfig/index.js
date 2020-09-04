import React from 'react'

//components
import Navbar from '../../components/NavBar'
import Footer from '../../components/Footer'
import BoxConfig from '../../components/Box/BoxConfig'

import './styles.css'

const Config = () => {
    return (
        <section className="container-config">
            <Navbar 
                nameBtnSecundary = "Configura&ccedil;&atilde;o"
            />
            <BoxConfig />
            <Footer 
                paragraph="Desenvolvido por Dennis J Carvalho"
            />
        </section>
    )
}

export default Config