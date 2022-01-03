import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import Circle from '../Circle';
import waitForElementTransition from 'wait-for-element-transition';
import { Link, useNavigate } from 'react-router-dom';
import { waitFor } from '@testing-library/react';
import Nav from '../Nav';

export default function Home(props) {
    const [converge, setConverge] = useState(false);
    const [inFocus, setInFocus] = useState('');
    // const [curPage, setCurPage] = useState('');
    let navigate = useNavigate();

    const toggleConverge = (e) => {
        const page = e.currentTarget.id.split('-')[0];
        const target = e.currentTarget;
        setInFocus(page);
        setConverge(!converge);
        waitForElementTransition(e.currentTarget).then(() => {
            target.addEventListener('animationend', () => {
                console.log('Animation ended');
                navigate(`/react-portfolio/${page}`);
            });
            target.classList.add('centered');
            if (target.id === 'about-btn') target.classList.add('shrink-circle');
            else target.classList.add('shrink-all');
            props.setCurPage(page.toUpperCase());
            waitForElementTransition(target).then(() => {
                // navigate(`/${page}`);
            });
        });
    }

    return (
        <div id="home">
            <Nav hideLinks={true} />
            <div className="body-container menu-circle-container">
                <Circle name="About" page="about" convergeClass='center-from-left' converge={converge} onClick={toggleConverge} inFocus={inFocus} />
                <Circle name="Portfolio" page="portfolio" convergeClass='fade-center' converge={converge} onClick={toggleConverge} inFocus={inFocus} />
                <Circle name="Contact" page="contact" convergeClass='center-from-right' converge={converge} onClick={toggleConverge} inFocus={inFocus} />
            </div>
        </div>
    );
}