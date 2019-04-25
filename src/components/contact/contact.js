import React from 'react';

import './contact.css';

const Contact = ({colorTheme}) => {
    return (
        <section name="contact">
            <div className="container mb-5">
                <h1 className={`section-title ${colorTheme}-underline`}>
                    Contact
                </h1>
                <div className="text-center height-spacing">
                    <div><a href="mailto:michael.choi96@gmail.com"><i className={`far fa-paper-plane ${colorTheme}`}></i></a>&nbsp;&nbsp;&nbsp;michael.choi96@gmail.com</div>
                    <div className="d-flex justify-content-around  contact-space">
                        <a href="https://www.linkedin.com/in/michael-choi-2a8509135/" rel="noopener noreferrer" target="_blank"><i className={`fab fa-linkedin project-link social-media ${colorTheme}`}></i></a>
                        <a href="https://github.com/mikechoi1" rel="noopener noreferrer" target="_blank"><i className={`fab fa-github-square project-link social-media ${colorTheme}`}></i></a>
                    </div>
                    Thanks for visiting my site!
                </div>
            </div>
        </section>
    );
};
export default Contact;