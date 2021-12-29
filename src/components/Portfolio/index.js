import React, { useEffect } from 'react';
import './index.css';
import Circle from '../Circle';
import glassAnimals from './glassanimals.png';
import metameme from './metameme.png';
import mindgro from './mindgro.jpg';
import viewnify from './viewnify.png';
import github from './github.png';

function PortfolioEntry(props) {
    return (
        <div className='portfolio-entry'>
        </div>
    );
}

export default function Portfolio(props) {
    return (
        <div id="about" className="page-container">
            <h1 id="name-title">JARED HECTOR</h1>
            <Circle name="Portfolio" page="portfolio" className='centered shrinked shrinked-text in-focus' />
            <div className='bubble-container'>
                <div className='bubble top-left'>
                    <img className='bubble-img' src={viewnify} />
                    <div className='bubble-info'>
                        <h2>Viewnify</h2>
                        <a href='https://github.com/jwhector/viewnify'><img src={github} /></a>
                    </div>
                </div>
                <div className='bubble top-right'>
                    <img className='bubble-img' src={metameme} />
                </div>
                <div className='bubble bot-left'>
                    <img className='bubble-img' src={mindgro} />
                </div>
                <div className='bubble bot-right'>
                    <img className='bubble-img' src={glassAnimals} />
                </div>
            </div>
        </div>
    );
}