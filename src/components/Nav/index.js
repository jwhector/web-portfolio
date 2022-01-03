import './Nav.css';
import { useState } from "react";

export default function Nav(props) {
    const handlePageChange = (e) => {
        console.log(e.target.innerText);
        props.setCurPage(e.target.innerText)
    }
    return (
        <div className='nav-bar'>
            <h1 id='name-title'>JARED HECTOR</h1>
            <ul className={`nav-links ${props.hideLinks ? 'no-display' : ''}`}>
                <li onClick={handlePageChange} className={`${props.curPage === 'ABOUT' ? 'active-link' : ''}`}>ABOUT</li>
                <li onClick={handlePageChange} className={`${props.curPage === 'PORTFOLIO' ? 'active-link' : ''}`}>PORTFOLIO</li>
                <li onClick={handlePageChange} className={`${props.curPage === 'CONTACT' ? 'active-link' : ''}`}>CONTACT</li>
            </ul>
        </div>
    );
}