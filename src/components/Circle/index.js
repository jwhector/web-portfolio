import React, { useEffect } from 'react';
import './Circle.css';

export default function Circle(props) {
    return (
        <div id={`${props.page}-btn`} onClick={props.onClick} className={`circle-container ${props.converge ? props.convergeClass : ''} ${props.inFocus === props.page ? 'in-focus' : ''} ${props.className}`} >
            <div  className={`menu-circle`} onClick={props.onClick}></div>
            <h2 className="menu-label">{props.name}</h2>
        </div>
    );
}