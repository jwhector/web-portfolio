import React, { useEffect } from 'react';
import './index.css';
import Circle from '../Circle';

export default function Portfolio(props) {
    return (
        <div id="about" className="page-container">
            <h1 id="name-title">Jared Hector</h1>
            <Circle name="Portfolio" page="portfolio" className='centered shrink-circle shrink-text' />
        </div>
    );
}