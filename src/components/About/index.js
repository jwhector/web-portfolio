import React, { useEffect } from 'react';
import './index.css';
import pfp from './jwhector.jpeg';

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
                <p>Hi, I'm Jared. I'm a full-stack developer from Seattle, Washington.
                    I recently graduated from Stanford University with a B.S. in Symbolic Systems
                    with a Computer Music concentration. To sum myself up in a small portfolio site entry:
                    I love music, I love coding, and every day I strive to be the solution to a problem.
                    <br /><br />
                    Here's a little bit 
                </p>
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