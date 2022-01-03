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

function PortfolioEntry(props) {
    return (
        <div className='portfolio-entry'>
        </div>
    );
}

export default function Portfolio(props) {
    // const [exit, setExit] = useState('');
    // const [retreat, setRetreat] = useState('');

    // const handleYolo = () => {
    //     setExit(exit ? '' : 'exit');
    //     setRetreat(retreat ? '' : 'retreat');
    // }
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
        navigate(`/react-portfolio/${props.curPage.toLowerCase()}`);
        navigated = true;
    }

    return (
        <div id="portfolio" className="page-container">
            <Nav curPage={props.curPage} setCurPage={props.setCurPage}/>
            <div className="body-container">
                {/* <h1 id="name-title">JARED HECTOR</h1> */}
                {/* <button style={{ zIndex: 5 }} onClick={handleYolo}>YOLO</button> */}
                <Circle name="Portfolio" page="portfolio" className='centered shrinked shrinked-text in-focus' />
                <div ref={container} className={`bubble-container ${props.curPage === 'PORTFOLIO' ? '' : 'retreat'}`}>
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
            </div>
        </div>
    );
}