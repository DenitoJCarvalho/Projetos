import React, { useEffect } from 'react'

import api from '../../../services/api'


//components
import Button from '../../../components/Button'

import './style.css'

const FormConfig = () => {

    useEffect(() => {
        api.post('/config', {
            name: document.querySelector("input[name='empreendedor']").value,
            cnpj: document.querySelector("input[name='cnpj']").value
        })
        .then(response => {
            
        })
    }, [])

    return (
        <section className="container-form-config">
            <form>
                <div>
                    <label htmlFor="empreendedor">
                        Nome do empreendedor
                    </label>
                    <small id="noteName">
                        * 
                    </small>
                    <br/>
                    <input 
                        type="text"
                        name="empreendedor"
                        maxLength="50"
                        minLength="2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="cnpj">
                        CNPJ
                    </label>
                    <small id="noteCnpj">
                        * 
                    </small>
                    <br/>
                    <input 
                        type="text"
                        name="cnpj"
                        maxLength="14"
                        minLength="14"
                        required
                    />
                </div>
                <div>
                    <Button
                        name="inserir"
                    >
                        Inserir
                    </Button>
                </div>
            </form>
        </section>
    )
}

export default FormConfig