import React from 'react'

import Header from '../../Header'
import ContentMain from '../../ContentMain'
import Report from '../../Report'

import './style.css'


const BoxHome = () => {
    return (
        <section className="box">
            <Header />
            <ContentMain 
                title="Revenda de Mercadoria"
                label1="C/ nota fiscal"
                label2="S/ nota fiscal"
                label3="Total das revendas" 
                href="/register-value"   
            />

            <ContentMain 
                title="Venda de Produtos Industrializados"
                label1="C/ nota fiscal"
                label2="S/ nota fiscal"
                label3="Total das vendas"
                name="Inserir"  
                href="/register-value"  
            />

            <ContentMain 
                title="Prestação de Serviço"
                label1="C/ nota fiscal"
                label2="S/ nota fiscal"
                label3="Total prest.serviço"    
                name="Inserir"
                href="/register-value"
            />

            <Report />

        </section>
    )
}

export default BoxHome
