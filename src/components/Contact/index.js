import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import Circle from '../Circle';import Nav from '../Nav';
import { useNavigate } from 'react-router';
import github from './github.png';
import linkedin from './linkedin.png';
import email from './email.png';

export default function Contact(props) {
    const container = useRef(null);
    const navigate = useNavigate();

    let navigated = false;

    useEffect(() => {
        props.setCurPage('CONTACT');
    }, [])

    useEffect(() => {
        const containerElem = container.current;
        if (props.curPage !== 'CONTACT') {
            containerElem.addEventListener('animationend', navigateToCurPage);
            return function cleanup() {
                containerElem.removeEventListener('animationend', navigateToCurPage);
            }
        }
    }, [props.curPage]);

    const navigateToCurPage = () => {
        if (navigated) return;
        navigate(`/react-portfolio/${props.curPage.toLowerCase()}`);
        navigated = true;
    }

    return (
        <div id="contact" className="page-container">
            <Nav curPage={props.curPage} setCurPage={props.setCurPage}/>
            <div className="body-container">
                <Circle name="Contact" page="contact" className={`centered shrinked shrinked-text in-focus ${props.curPage === 'CONTACT' ? 'lift-circle' : 'lower-circle'}`} />
                <div ref={container} className={`contact-container ${props.curPage === 'CONTACT' ? '' : 'retract-contact'}`}>
                    <div className={`${props.curPage === 'CONTACT' ? '' : 'retract-contact-left'} contact-elem github`}>
                    <a href="https://github.com/jwhector"><img src={github} /></a>
                    </div>
                    <div className="contact-elem email">
                    <a href="mailto:jared.hector@gmail.com"><img src={email} /></a>
                    </div>
                    <div className={`${props.curPage === 'CONTACT' ? '' : 'retract-contact-right'} contact-elem linkedin`}>
                        <a href="https://linkedin.com/in/jared-hector"><img src={linkedin} /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}