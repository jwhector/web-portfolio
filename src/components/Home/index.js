import React, { useEffect } from 'react';
import './index.css';

export default function Home() {
    useEffect(() => {
        console.log(__dirname);
    });

    return (
        <div id="home">
            <h2 id="my-name" className="hdr-txt">Jared Hector</h2>
            <div id="name-box">
                
            </div>   
            <h3 id="subtitle">Developer. Project manager. Dungeon Master.</h3>
            <div className="main-links">
                <div className="menu-div">
                    <h2 className="hdr-txt big-nav">ABOUT</h2>
                    <a href="#about"></a>
                </div>
                <div className="menu-div">
                    <h2 className="hdr-txt big-nav">PORTFOLIO</h2>
                    <a href="#portfolio"></a>
                </div>
                <div className="menu-div">
                    <h2 className="hdr-txt big-nav">CONTACT</h2>
                    <a href="#contact"></a>
                </div>
            </div>
        </div>
    );
}