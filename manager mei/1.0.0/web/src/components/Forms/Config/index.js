import React from 'react'


//components
import Button from '../../../components/Button'

import './style.css'


const FormConfig = () => {
    return (
        <form>
            <label htmlFor="empreendedor">
                Nome do empreendedor
            </label>
            <br/>
            <input 
                type="text"
                name="empreendedor"
                required
            />
            <br/><br/>

            <label htmlFor="cnpj">
                CNPJ
            </label>
            <br/>
            <input 
                type="text"
                name="cnpj"
                required
            />
            <br/><br/>

            <Button
                title="Inserir"
                name="insert"
            >
            </Button>
        </form>
    )
}

export default FormConfig