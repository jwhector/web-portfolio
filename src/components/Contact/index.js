import React, { useState, useEffect } from 'react';
import './index.css';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');


    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageInput = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
    }

    return (
        <div id="contact" className="section">
            <div id="contact-label" className="section-label">
                <h2 id="contact-header" className="hdr-txt label">CONTACT</h2>
            </div>
            {/* <div id="contact-label-bottom" className="section-label pin-bottom-left">
                <h2 id="contact-header-bottom" className="hdr-txt label">CONTACT</h2>
            </div> */}
            <div id="contact-info" className="section-info flex-right">
                {/* <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={name} onChange={handleNameInput} name="name" placeholder="name" />
                    </label>
                    <label>
                        Email:
                        <input type="text" value={email} onChange={handleEmailInput} name="email" placeholder="email" />
                    </label>
                    <label>
                        Message:
                        <textarea value={message} onChange={handleMessageInput} />
                    </label>
                    <input type="submit"></input>
                </form> */}
                {/* <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

                     Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

//                     Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

//                     Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.
//                 </p> */}
            </div>
        </div>
    );
}

// import React, { useEffect } from 'react';
// import './index.css';

// export default function About() {
//     useEffect(() => {
//         console.log(__dirname);
//     });

//     useEffect(() => {
//         document.addEventListener('scroll', handleScroll);
//         return () => {
//             document.removeEventListener('scroll', handleScroll);
//         };
//     });

//     const handleScroll = () => {
//         const labelElem = document.querySelector('#portfolio-label');
//         const labelRect = labelElem.getBoundingClientRect();
//         const aboutElem = document.querySelector('#about-label');

//         if (labelRect.y <= 0) {
//             labelElem.classList.add('fix-left');
//         }

//         if (labelRect.y <= labelRect.height) {
//             aboutElem.classList.add('pin-bottom-right');
//         } else {
//             aboutElem.classList.remove('pin-bottom-right');
//         }

//         const prevElem = document.querySelector('#about');
//         const prevRect = prevElem.getBoundingClientRect();

//         if (prevRect.bottom >= 0) {
//             // console.log(prevRect);
//             labelElem.classList.remove('fix-left');
//         }

//         // console.log(rightRect);
//         // console.log(homeRect);
//         // console.log(labelRect);
//     }

//     return (
//         <div id="portfolio">
//             <div id="portfolio-label" className="section-label">
//                 <h2 id="portfolio-header" className="hdr-txt">PORTFOLIO</h2>
//             </div>
//             <div id="portfolio-info" className="section-info flex-right">
//                 <p>
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

//                     Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

//                     Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id dui id ante pulvinar malesuada. Aenean et sem convallis, venenatis orci vitae, fermentum est. Etiam id risus ut elit lobortis hendrerit id tempus turpis. Praesent volutpat rhoncus nisi ut sollicitudin. Nulla sit amet varius elit. Aenean pharetra condimentum tortor eu pulvinar. Donec in mauris nisi. Vivamus scelerisque efficitur libero non tincidunt. Nullam faucibus neque sed est commodo, sed gravida tellus consectetur.

//                     Donec maximus sodales dui, sit amet semper quam volutpat quis. Sed imperdiet sollicitudin elit eu varius. Phasellus fermentum justo nec dolor rhoncus ornare. Donec viverra mauris quis ligula malesuada, eu tristique sem consequat. Aenean ut urna convallis, pulvinar metus ut, lobortis est. Vestibulum a semper erat, nec hendrerit justo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras libero risus, sagittis eget urna vitae, facilisis varius diam. Vestibulum vitae pretium lacus. Sed quis augue id purus commodo commodo. Fusce lorem tortor, vehicula id neque lobortis, congue tempor elit. Nulla lacinia id dui eget lobortis. Pellentesque ullamcorper mauris lacinia, tempus ex vel, dignissim justo. Curabitur pretium nisi eget felis sollicitudin feugiat.
//                 </p>
//             </div>  
//         </div>
//     );
// }