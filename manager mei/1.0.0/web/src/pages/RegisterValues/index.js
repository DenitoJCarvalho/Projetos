import React from 'react'


//components
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import BoxRegisterValues from '../../components/Box/BoxRegisterValues'

//CSS
import './styles.css'

const RegisterValue = () => {
    return (
        <section className="container-register-values">
            <NavBar nameBtnSecundary="Receita"/>
            <BoxRegisterValues />
            <Footer paragraph="Desenvolvido por Dennis J Carvalho"/>
        </section>
    )
}

export default RegisterValue