import React from 'react'


import './style.css'
import Button from '../Button'

const ContentMain = (props) => {

    const valueDefault = '0,00'

    return (
        <section className="container-content-main">
            <h3>{props.title}</h3>
            
            <label>{props.label1}</label>
            <div>{`R$${valueDefault}`}</div>
            <label>{props.label2}</label>
            <div>{`R$${valueDefault}`}</div>
            <label>{props.label3}</label>
            <div>{`R$${valueDefault}`}</div>

            <Button />
        </section>

    )
}

export default ContentMain
