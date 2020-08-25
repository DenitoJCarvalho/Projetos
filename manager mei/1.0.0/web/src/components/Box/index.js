import React from 'react'

import Header from '../Header'
<<<<<<< HEAD
=======
import ContentMain from '../ContentMain'
import Report from '../Report'
>>>>>>> MainBox

import './style.css'


const Box = () => {
    return (
        <section className="box">
            <Header />
<<<<<<< HEAD
=======
            <ContentMain 
                title="Revenda de Mercadoria"
                label1="C/ nota fiscal"
                label2="S/ nota fiscal"
                label3="Total das revendas"
                name="Inserir"    
            />

            <ContentMain 
                title="Venda de Produtos Industrializados"
                label1="C/ nota fiscal"
                label2="S/ nota fiscal"
                label3="Total das vendas"
                name="Inserir"    
            />

            <ContentMain 
                title="Prestação de Serviço"
                label1="C/ nota fiscal"
                label2="S/ nota fiscal"
                label3="Total prest.serviço"    
                name="Inserir"
            />

            <Report />

>>>>>>> MainBox
        </section>
    )
}

export default Box