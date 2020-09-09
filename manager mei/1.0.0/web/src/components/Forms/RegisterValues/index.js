import React from 'react'

//components

//CSS
import './styles.css'

const FormRegisterValues = () => {
    return (
        <form className="register">
            <div>
                <label htmlFor="item-description">
                    Descrição Item
                    <small id="note-item-description"> * </small>
                </label>
                <br />
                <input type="text" name="item-description" />
            </div>
            <div>
                <label htmlFor="type receipt">
                    Tipo de Receita
                    <small id="note-type-receipt"> * </small>
                </label>
                <br />
                <input list="receitas" name="type receipt" />
                <datalist id="receitas">
                    <option value="1 - Revenda de mercadoria com dispensa de emissão de nota fiscal" />
                    <option value="2 - Revenda de mercadoria com documento fiscal emitido" />
                    <option value="3 - Venda de produto industrializado com dispensa de nota fiscal" />
                    <option value="4 - Venda de produto industrializado com documento fiscal emitido" />
                    <option value="5 - Prestação de serviço com dispensa de emissão de nota fiscal" />
                    <option value="6 - Prestação de serviço com emissão de nota fiscal" />
                </datalist>
            </div>
            <div>
                <label htmlFor="value">
                    Valor
                    <small id="note-value"> * </small>
                </label>
                <br />
                <input type="text" name="value" />
            </div>
            <div>
                <input type="submit" name="insert" value="Inserir" />
            </div>
        </form>
    )
}

export default FormRegisterValues