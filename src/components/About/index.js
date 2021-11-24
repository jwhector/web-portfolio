import React, { useEffect } from 'react';
import './index.css';

export default function About() {
    useEffect(() => {
        console.log(__dirname);
    });

    // useEffect(() => {
    //     document.addEventListener('scroll', handleScroll);
    //     return () => {
    //         document.removeEventListener('scroll', handleScroll);
    //         const body = document.querySelector('body');
    //         body.classList.remove('stop-scroll');
    //     };
    // })

    // const handleScroll = () => {
    //     const elem = document.querySelector('#about-left');
    //     const rect = elem.getBoundingClientRect();

    //     if (rect.y <= 0) {
    //         const body = document.querySelector('body');
    //         body.classList.add('stop-scroll');
    //         elem.scrollIntoView(true);
    //     }

    //     console.log(rect);
    // }

    return (
        <div id="about">
            <div id="about-left" className="left-pane">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

                Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.</p>
            </div>
            <div id="about-right">
                <h2 id="about-header" className="hdr-txt">ABOUT</h2>
            </div>
        </div>
    );
}