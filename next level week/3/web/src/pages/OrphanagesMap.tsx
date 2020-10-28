import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { FiPlus, FiArrowRight } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import mapMarkerImg from '../assets/images/map-marker.svg'

import '../styles/pages/orphanage-map.css'


const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [32,40],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]


})

const OrphanagesMap = () => {
    /*useEffect(() => {
        api.get('orphanages')
            .then( response => {
                
            })
    }, [])*/

    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="happpy" />

                    <h2>Escolha um orfanato no mapa.</h2>
                    <p>Muitas crianças estão esperando a sua visita :) </p>
                </header>

                <footer>
                    <strong>Itu,</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map 
                center={[-23.2975574,-47.4177598]}
                zoom={9}
                style={{width: '100%',height: '100%'}}
            >
                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png}" */}
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker 
                    icon={mapIcon}
                    position={[-23.2975574,-47.4177598]}
                >
                    <Popup 
                        closeButton={false}
                        minWidth={240}
                        maxWidth={240}
                        className="map-popup"
                    >
                        Orfanato
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="rgba(255, 255, 255, 1)" />
                        </Link>
                    </Popup>
                </Marker>
                
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus 
                    size={32} 
                    color="rgba(255, 255, 255, 1)" 
                />
            </Link>

        </div>
    )
}

export default OrphanagesMap

