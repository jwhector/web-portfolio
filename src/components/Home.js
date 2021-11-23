import React, { useEffect } from 'react';
import ring from '../ring.png';
import nameImg from '../nameImg.png';

export default function Home() {
    useEffect(() => {
        console.log(__dirname);
    });

    return (
        <div className="home">
            <div className="home-container">
                {/* <h2>Hi, I'm</h2> */}
                <img src={ring} alt="Neon ring" id="ring"/>
                <img src={nameImg} alt="Jared Hector" id="name-img" />
                {/* <h2>I'm a full stack engineer.</h2> */}
            </div>
        </div>
    );
}