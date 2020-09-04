import React from 'react'


//components
import Button from '../../../components/Button'

import './style.css'


const FormConfig = () => {
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
                        maxLength="11"
                        minLength="11"
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