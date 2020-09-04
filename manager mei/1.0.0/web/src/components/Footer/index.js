import React from 'react'

import './style.css'

const Footer = (props) => {
    return (
        <footer className="footer">
            <p>{props.paragraph}</p>
        </footer>
    )
}

export default Footer