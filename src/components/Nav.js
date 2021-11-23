import React from 'react';

export default function Nav() {
    return (
        <ul className="navBar">
            <li>
                <a href="about">
                    About Me
                </a>
            </li>
            <li>
                <a href="portfolio">
                    Portfolio
                </a>
            </li>
            <li>
                <a href="contact">
                    Contact
                </a>
            </li>
            <li>
                <a href="resume">
                    Resume
                </a>
            </li>
        </ul>
    );
}