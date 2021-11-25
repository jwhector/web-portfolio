import React, { useEffect } from 'react';
import './index.css';
import nameBox from './nameBox.png';

export default function Home() {
    useEffect(() => {
        console.log(__dirname);
    });

    // useEffect(() => {
    //     const about = document.getElementById('about');
    //     const portfolio = document.getElementById('portfolio');
    //     const contact = document.getElementById('contact');

    //     about.addEventListener()
    // });

    const scrollToAbout = () => {
        const about = document.getElementById('about');
        about.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    const scrollToPortfolio = () => {
        const portfolio = document.getElementById('portfolio');
        portfolio.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    const scrollToContact = () => {
        const contact = document.getElementById('contact');
        contact.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }

    return (
        <div id="home">
            <div id="name">
                <h2 id="my-name" className="hdr-txt">Jared Hector</h2>
                <img id="name-box" alt="3D box surrounding 'Jared Hector'" src={nameBox} />
            </div>
            <h3 id="subtitle">Developer. Project Manager. Dungeon Master.</h3>
            <div className="main-links">
                <div className="menu-div">
                    <h2 className="hdr-txt big-nav">ABOUT</h2>
                    <a onClick={scrollToAbout}></a>
                </div>
                <div className="menu-div">
                    <h2 className="hdr-txt big-nav">PORTFOLIO</h2>
                    <a onClick={scrollToPortfolio}></a>
                </div>
                <div  className="menu-div">
                    <h2 className="hdr-txt big-nav">CONTACT</h2>
                    <a onClick={scrollToContact}></a>
                </div>
            </div>
        </div>
    );
}