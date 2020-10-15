import React from 'react'

import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import '../styles/pages/orphanage-map.css'

const OrphanagesMap = () => {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src="" />

                    <h2>Escolha um orfanato no mapa.</h2>
                </header>

                <footer>
                    <strong>Itu,</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <section></section>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="rgba(255, 255, 255, 1)" />
            </Link>
        </div>
    )
}

export default OrphanagesMap

