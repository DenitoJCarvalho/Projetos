import React from 'react'

import './styles.css'

const Button = (props) => {
    return (
        <button className="btn">
            {props.name}
        </button>
    )
}

export default Button