import React, { useEffect, useState } from 'react';
import './About.css';
import Circle from '../Circle';
import stanford from './stanford.png';
import uw from './uw.png';

export default function About(props) {
    const [exit, setExit] = useState(false);

    return (
        <div id="about" className="page-container">
            <h1 id="name-title">JARED HECTOR</h1>
            <button onClick={() => setExit(!exit)}>YOLO</button> 
            <p id="about-me-txt" className={`${exit ? 'fade-out' : ''}`}>Hi, I'm Jared. I'm a full stack developer from Seattle, Washington.
                    Recently, I came to realize web development would be a great opportunity to exercise my creativity and drive to reach wide audiences.
                    In short: I love music, I love coding, and every day I strive to be the solution to a problem.</p>
            <Circle name="About" page="about" className={`centered shrinked ${exit ? 'grow-circle' : ''}`} />

            <h2 id='me-title' className={`about-title ${exit ? 'fade-out' : ''}`}>ME</h2>
            <svg id='about-me-svg' className={`small-stroke ${exit ? 'stroke-out-small' : ''}`} viewBox="0 0 351 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M350 176L228.981 1H0" stroke="black"/>
            </svg>
            
            <h2 id='education-title' className={`about-title ${exit ? 'fade-out' : ''}`}>EDUCATION</h2>
            <svg id='education-svg' className={`lg-stroke ${exit ? 'stroke-out-lg' : ''}`} viewBox="0 0 446 177" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 176L122.019 1H445.5" stroke="black"/>
            </svg>
            <div id='education-container' className={`${exit ? 'fade-out' : ''}`}>
                <div className='school-container'>
                    <img className='school-logo' src={stanford} />
                    <div className='school-info'>
                        <h2 className='school-title'>Stanford University</h2>
                        <hr />
                        <h2 className='school-degree'>B.S., Symbolic Systems</h2>
                    </div>
                </div>
                <div className='school-container' style={{ marginTop: '5rem' }}>
                    <img className='school-logo' src={uw} style={{ transform: 'scale(1.3)' }} />
                    <div className='school-info'>
                        <h2 className='school-title'>University of Washington</h2>
                        <hr />
                        <h2 className='school-degree'>Full Stack Certification</h2>
                    </div>
                </div>
            </div>
            {/* <p id='education-txt'>I recently graduated from Stanford University with a B.S. in Symbolic Systems with a Computer Music concentration. Recently, I came to realize web development would be a great opportunity to exercise my creativity and drive to reach wide audiences. I enrolled in a full stack program at the University of Washington to enable me to dive into the world of web dev.</p> */}


            
            <h2 id='skills-title' className={`about-title ${exit ? 'fade-out' : ''}`}>SKILLS</h2>
            <svg id='skills-svg' className={`small-stroke ${exit ? 'stroke-out-small' : ''}`} viewBox="0 0 351 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M350 1L228.981 101H0" stroke="black"/>
            </svg>
            <div id='skills-container' className={`${exit ? 'fade-out' : ''}`}>
                <h2 className='skill-item'>React</h2>
                <h2 className='skill-item'>Node.js</h2>
                <h2 className='skill-item'>HTML, CSS, and JS Front End Stack</h2>
                <h2 className='skill-item'>MySQL, Postgres, MongoDB</h2>
                <h2 className='skill-item'>Python</h2>
            </div>
        </div>
    );
}