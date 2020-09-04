import React from 'react'

import './styles.css'

const Button = ({title, name}) => {
    return (
        <button 
            className="btn"
            name={name}    
        >
            {title}
        </button>
    )
}

export default Button