import React, { useEffect } from 'react';
import './index.css';
import glassAnimals from './glassanimals.png';
import github from './github.png';
import mindgro from './mindgro.jpg';
import metaMeme from './metameme.png';

export default function About() {
    // useEffect(() => {
    //     console.log(__dirname);
    // });

    return (
        <div id="portfolio" className="section">
            <div id="portfolio-label" className="section-label flip-gradient">
                <h2 id="portfolio-header" className="hdr-txt label">WORKS</h2>
            </div>
            {/* <div id="portfolio-label-bottom" className="section-label flip-gradient pin-bottom-left">
                <h2 id="portfolio-header-bottom" className="hdr-txt label">WORKS</h2>
            </div> */}
            <div id="portfolio-info" className="section-info flex-right">
                <h2 id="portfolio-title">Portfolio</h2>
                <hr />
                <div id="portfolio-works">
                    <div className="work">
                        <img id="glassanimals" className="work-img" alt="Screenshot of the code quiz website with Glass Animals on the front." src={glassAnimals} />
                        <a className="overlay" href="https://jwhector.github.io/code-quiz/"><div>
                            <h2 className="work-name">Glass Animals Code Quiz</h2>
                            <a href="https://github.com/jwhector/code-quiz"><img src={github} alt="GitHub icon." /></a>
                        </div></a>
                    </div>
                    <div className="work">
                        <img id="mindgro" className="work-img" alt="Screenshot of the MindGro website with a pond and lilypad in middle." src={mindgro} />
                        <a className="overlay" href="https://jwhector.github.io/mind-gro/"><div>
                            <h2 className="work-name">Mind-Gro Journal</h2>
                            <a href="https://github.com/jwhector/mind-gro"><img src={github} alt="GitHub icon." /></a>
                        </div></a>
                    </div>
                    <div className="work">
                        <img id="metameme" className="work-img" alt="Screenshot of the Meta Meme Market website with various memes in a gallery." src={metaMeme} />
                        <a className="overlay" href="https://meta-meme-market.herokuapp.com/"><div>
                            <h2 className="work-name">MetaMeme Market</h2>
                            <a href="https://github.com/jwhector/meta-meme-market"><img src={github} alt="GitHub icon." /></a>
                        </div></a>
                    </div>
                    {/* <div className="work">
                        <img id="glassanimals" alt="Screenshot of the code quiz website with Glass Animals on the front." src={glassAnimals} />
                        <div className="overlay">
                            <h2 className="work-name">Glass Animals Code Quiz</h2>
                            <a href="https://github.com/jwhector/code-quiz"><img src={github} alt="GitHub icon." /></a>
                        </div>
                    </div>
                    <div className="work">
                        <img id="glassanimals" alt="Screenshot of the code quiz website with Glass Animals on the front." src={glassAnimals} />
                        <div className="overlay">
                            <h2 className="work-name">Glass Animals Code Quiz</h2>
                            <a href="https://github.com/jwhector/code-quiz"><img src={github} alt="GitHub icon." /></a>
                        </div>
                    </div> */}
                </div>
            </div>  
        </div>
    );
}