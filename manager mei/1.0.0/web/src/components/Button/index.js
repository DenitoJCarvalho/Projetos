import React from 'react'

import './styles.css'

const Button = (props) => {
    return (
        <button 
            className="btn"
            name={props.name}    
        >
            {props.children}
        </button>
    )
}

export default Button