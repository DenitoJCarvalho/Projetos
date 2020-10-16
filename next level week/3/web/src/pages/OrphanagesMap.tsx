import React from 'react'

import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet'

import '../styles/pages/orphanage-map.css'
import 'leaflet/dist/leaflet.css'

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

            <Map 
                center={[-23.2975574,-47.4177598]}
                zoom={11}
                style={{width: '100%',height: '100%'}}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png}" */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/satelite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_TOKEN}`}/>
                
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="rgba(255, 255, 255, 1)" />
            </Link>

        </div>
    )
}

export default OrphanagesMap

