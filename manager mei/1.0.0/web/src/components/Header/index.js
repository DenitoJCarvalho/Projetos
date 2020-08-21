import React from 'react'

import './style.css'

const Header = () => {
    return (
        <header className="header">
            <div>
                <label>
                    Empreendedor individual:
                </label>
                <div className="data-user"></div>
            </div>
            <div>
                <label>
                    CNPJ:
                </label>
                <div className="data-user"></div>
            </div>
            <div>
                <label>
                    Período de apuraçao:
                </label>
                <div className="data-user"></div>
            </div>
        </header>
    )
}

export default Header