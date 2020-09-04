import React, { useState } from 'react'

import Button from '../Button'

import './styles.css'

const Report = (props) => {

    // eslint-disable-next-line
    const [ valueInitial, setValueInitial ] = useState('0,00')

    return (
        <section className="report">
            <div>
                <p>
                    Total geral das receitas brutas no mês: 
                </p>

                <output className="value">
                    {`R$${valueInitial}`}
                </output>
            </div>
            <div>
                <Button name="relatorio">
                    Gerar Relatório
                </Button>
            </div>
        </section>
    )
}

export default Report