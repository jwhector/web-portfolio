import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import Circle from '../Circle';
import glassAnimals from './glassanimals.png';
import metameme from './metameme.png';
import mindgro from './mindgro.jpg';
import viewnify from './viewnify.png';
import github from './github.png';
import Nav from '../Nav';
import { useNavigate } from 'react-router';

function BubbleContainer(props) {
    return (
        <div ref={props.container} className={`bubble-container ${props.curPage === 'PORTFOLIO' ? '' : 'retreat'}`}>
            <div className={`bubble top-left ${props.curPage === 'PORTFOLIO' ? '' : 'exit'}`}>
                <img className='bubble-img' src={viewnify} />
                <a href='https://viewnify.herokuapp.com/'>
                    <div className='bubble-info'>
                        <h2>Viewnify</h2>
                        <a href='https://github.com/jwhector/viewnify'><img className='ico' src={github} /></a>
                    </div>
                </a>
            </div>
            <div className={`bubble top-right ${props.curPage === 'PORTFOLIO' ? '' : 'exit'}`}>
                <img className='bubble-img' src={metameme} />
                <a href='https://meta-meme-market.herokuapp.com/'>
                    <div className='bubble-info'>
                        <h2>MetaMeme</h2>
                        <a href='https://github.com/jwhector/meta-meme-market'><img className='ico' src={github} /></a>
                    </div>
                </a>
            </div>
            <div className={`bubble bot-left ${props.curPage === 'PORTFOLIO' ? '' : 'exit'}`}>
                <img className='bubble-img' src={mindgro} />
                <a href='https://jwhector.github.io/mind-gro/'>
                    <div className='bubble-info'>
                        <h2>MindGro</h2>
                        <a href='https://github.com/jwhector/mind-gro'><img className='ico' src={github} /></a>
                    </div>
                </a>
            </div>
            <div className={`bubble bot-right ${props.curPage === 'PORTFOLIO' ? '' : 'exit'}`}>
                <img className='bubble-img' src={glassAnimals} />
                <a href='https://jwhector.github.io/code-quiz/'>
                    <div className='bubble-info'>
                        <h2>Glass Animals Quiz</h2>
                        <a href='https://github.com/jwhector/code-quiz'><img className='ico' src={github} /></a>
                    </div>
                </a>
            </div>
        </div>
    );
}

function MobileContainer(props) {
    return (
        <>
            <div ref={props.container} className="mobile-portfolio">
                <img className="mobile-portfolio-img" src={viewnify} />
                <div className="mobile-portfolio-info">
                    <h2 className="mobile-portfolio-title">Viewnify</h2>
                    <a href='https://github.com/jwhector/viewnify'><img className='ico' src={github} /></a>
                </div>
            </div>
            <div className="mobile-portfolio">
                <img className="mobile-portfolio-img" src={metameme} />
                <div className="mobile-portfolio-info">
                    <h2 className="mobile-portfolio-title">MetaMeme</h2>
                    <a href='https://github.com/jwhector/meta-meme-market'><img className='ico' src={github} /></a>
                </div>
            </div>
            <div className="mobile-portfolio">
                <img className="mobile-portfolio-img" src={mindgro} />
                <div className="mobile-portfolio-info">
                    <h2 className="mobile-portfolio-title">Mind-Gro</h2>
                    <a href='https://github.com/jwhector/mind-gro'><img className='ico' src={github} /></a>
                </div>
            </div>
            <div className="mobile-portfolio">
                <img className="mobile-portfolio-img" src={glassAnimals} />
                <div className="mobile-portfolio-info">
                    <h2 className="mobile-portfolio-title">Glass Animals Quiz</h2>
                    <a href='https://github.com/jwhector/code-quiz'><img className='ico' src={github} /></a>
                </div>
            </div>
        </>
    );
}

export default function Portfolio(props) {
    const container = useRef(null);
    const navigate = useNavigate();

    let navigated = false;

    useEffect(() => {
        props.setCurPage('PORTFOLIO');
    }, [])

    useEffect(() => {
        const containerElem = container.current;
        if (props.curPage !== 'PORTFOLIO') {
            containerElem.addEventListener('animationend', navigateToCurPage);
            return function cleanup() {
                containerElem.removeEventListener('animationend', navigateToCurPage);
            }
        }
    }, [props.curPage]);

    const navigateToCurPage = () => {
        if (navigated) return;
        navigate(`/${props.curPage.toLowerCase()}`);
        navigated = true;
    }

    return (
        <div id="portfolio" className="page-container">
            <Nav curPage={props.curPage} setCurPage={props.setCurPage}/>
            <div className="body-container">
                {props.isMobile ? <></> : <Circle name="Portfolio" page="portfolio" className='centered shrinked shrinked-text in-focus' />}
                {props.isMobile ? <></> : <BubbleContainer container={container} curPage={props.curPage} />}
                {props.isMobile ? <MobileContainer container={container} curPage={props.curPage} /> : <></>}
            </div>
        </div>
    );
}