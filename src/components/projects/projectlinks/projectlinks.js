import React from 'react';

import './projectlinks.css';

const ProjectLinks = ({ links, colorTheme }) => {
    // const { launch, github } = links;
    return(
        <div className="project-links">
        <a href={links.launch} rel="noopener noreferrer" target="_blank" className={`project-link ${colorTheme}-background`}>
            <i className="fas fa-rocket"></i>&nbsp;&nbsp;Launch
        </a>
        <a href={links.github} rel="noopener noreferrer" target="_blank" className={`project-link secondary ${colorTheme}-font`}>
            <i className="fab fa-github"></i>&nbsp;&nbsp;Github
        </a>
      </div>
    );
};
export default ProjectLinks;