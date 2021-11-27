import React, { useEffect } from 'react';
import './index.css';
import pfp from './jwhector.jpeg';
import uw from './uw.png';
import stanford from './stanford.png';
import cpp from './cpp.png';
import react from './react.png';
import nodejs from './nodejs.png';
import python from './python.png';
import frontend from './frontend.png';
import db from './db.png';

export default function About() {
    return (
        <div id="about" className="section">
            <div id="about-label" className="section-label">
                <h2 id="about-header" className="hdr-txt label">ABOUT</h2>
            </div>
            {/* <div id="about-label-bottom" className="section-label pin-bottom-left">
                <h2 id="about-header-bottom" className="hdr-txt label">ABOUT</h2>
            </div> */}
            <div id="about-left" className="section-info flex-right">
                <img id="pfp" src={pfp} alt="Photo of Jared Hector" />
                <p>Hi, I'm Jared. I'm a full stack developer from Seattle, Washington.
                    I recently graduated from Stanford University with a B.S. in Symbolic Systems
                    with a Computer Music concentration. Recently, I came to realize web development 
                    would be a great opportunity to exercise my creativity and drive to reach wide audiences.
                    I enrolled in a full stack program at the University of Washington to enable me to dive into
                    the world of web dev.
                    <br /><br />
                    In short: I love music, I love coding, and every day I strive to be the solution to a problem.
                </p>
                <hr />
                <div id="education">
                    <h2 className="about-section-label">Education</h2>
                    <div className="school">
                        <img className="school-logo" id="stanford-logo" alt="S logo of Stanford University" src={stanford} />
                        <div className="school-info">
                            <h2 className="school-name">Stanford University</h2>
                            <p className="school-details">B.S., Symbolic Systems - <em>2016-2020</em></p>
                        </div>
                    </div>
                    <div className="school">
                        <img className="school-logo" id="uw-logo" alt="W logo of the University of Washington" src={uw} />
                        <div className="school-info">
                            <h2 className="school-name">University of Washington</h2>
                            <p className="school-details">Full Stack Web Development Program - <em>2020</em></p>
                        </div>
                    </div>
                </div>
                <hr />
                <h2 className="about-section-label">Skills</h2>
                <div id="skillset">
                    <div className="skill">
                        <img className="skill-logo" id="react" alt="Node.js logo." src={react} />
                        <h2 className="skill-name">React</h2>
                    </div>
                    <div className="skill">
                        <img className="skill-logo" id="nodejs" alt="Node.js logo." src={nodejs} />
                        <h2 className="skill-name">NodeJS</h2>
                    </div>
                    <div className="skill">
                        <img className="skill-logo" id="frontend" alt="HTML5, CSS, and JS logos." src={frontend} />
                        <h2 className="skill-name">HTML5, CSS, and JS Front End Stack</h2>
                    </div>
                    <div className="skill">
                        <img className="skill-logo" id="db" alt="Database circular stack icon." src={db} />
                        <h2 className="skill-name">MySQL, Postgres, MongoDB</h2>
                    </div>
                    <div className="skill">
                        <img className="skill-logo" id="python" alt="Python snake logo." src={python} />
                        <h2 className="skill-name">Python</h2>
                    </div>
                    <div className="skill">
                        <img className="skill-logo" id="cpp" alt="C++ logo." src={cpp} />
                        <h2 className="skill-name">C++</h2>
                    </div>
                </div>
                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

                    Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

                    Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

                    Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.
                    </p> */}
            </div>
        </div>
    );
}