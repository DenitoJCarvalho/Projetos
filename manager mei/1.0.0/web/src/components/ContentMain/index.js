import React from 'react'
import { Link } from 'react-router-dom'


import './style.css'

const ContentMain = (props) => {

    const valueDefault = '0,00'

    return (
        <section className="container-content-main">
            <h3>{props.title}</h3>
            
            <label>
                {props.label1}
            </label>
            <div>
                {`R$${valueDefault}`}
            </div>
            <label>
                {props.label2}
            </label>
            <div>
                {`R$${valueDefault}`}
            </div>
            <label>
                {props.label3}
            </label>
            <div>
                {`R$${valueDefault}`}
            </div>

            <Link 
                to={props.href}
                className="btn link-btn"
            >
                Inserir
            </Link>
            
        </section>

    )
}

export default ContentMain
