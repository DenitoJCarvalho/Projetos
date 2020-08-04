import React from 'react'

import Logo from '../../assets/images/logo.svg'
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClass from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'

function Landing(){
    return (
        <div id="page-landing">
         <div id="page-landing-content" className="container">
            <div className="logo-container">
                <img src={Logo} alt="logo"/>
                <h2>Sua plataformas de estudos online</h2>
            </div>

            <img src={landingImg}
                alt="Plataforma de estudos"
                className="hero-image"
            />

            <div className="buttons-container">
                <a href="" className="study"> 
                    <img src={studyIcon} alt="Estudar"/>
                    Estudar
                </a>

                <a href="" className="give-classes">
                    <img src={giveClass} alt="Dar aulas" />
                    Dar aulas
                </a>
            </div>

            <span className="total-connections">
                Total de 200 conexões já realizadas
                <img src={purpleHeartIcon} alt="coração roxo"/>
            </span>
            
         </div>
        </div>
    )
}

export default Landing