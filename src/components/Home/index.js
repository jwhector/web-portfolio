import React, { useEffect, useRef, useState } from 'react';
import './index.css';
import Circle from '../Circle';
import waitForElementTransition from 'wait-for-element-transition';
import { Link, useNavigate } from 'react-router-dom';
import { waitFor } from '@testing-library/react';

export default function Home(props) {
    const [converge, setConverge] = useState(false);
    const [inFocus, setInFocus] = useState('');
    // const [curPage, setCurPage] = useState('');
    let navigate = useNavigate();

    const toggleConverge = (e) => {
        const page = e.currentTarget.id.split('-')[0];
        setInFocus(page);
        setConverge(!converge);
        waitForElementTransition(e.currentTarget).then(() => {
            navigate(`/${page}`);
        });
    }

    return (
        <div id="home">
            <h1 id="name-title">Jared Hector</h1>
            <div className="menu-circle-container">
                <Circle name="About" page="about" convergeClass='center-from-left' converge={converge} onClick={toggleConverge} inFocus={inFocus} />
                <Circle name="Portfolio" page="portfolio" convergeClass='fade-center' converge={converge} onClick={toggleConverge} inFocus={inFocus} />
                <Circle name="Contact" page="contact" convergeClass='center-from-right' converge={converge} onClick={toggleConverge} inFocus={inFocus} />
            </div>
        </div>
    );
}