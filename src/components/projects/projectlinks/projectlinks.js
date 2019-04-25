import React from 'react';

import './projectlinks.css';

class ProjectLinks extends React.Component {
    
    bothButton = () => {
        const { links, colorTheme } = this.props;
        return (
            <>
                <a href={links.launch} rel="noopener noreferrer" target="_blank" className={`project-link ${colorTheme}-background`}>
                    <i className="fas fa-rocket"></i>&nbsp;&nbsp;Launch
                </a>
                {this.githubButton()}
            </>
            
        );
    }
    githubButton = () => {
        const { links, colorTheme } = this.props;
        return(
            <a href={links.github} rel="noopener noreferrer" target="_blank" className={`project-link secondary ${colorTheme}-font`}>
                <i className="fab fa-github"></i>&nbsp;&nbsp;Github
            </a>
        );
    }
    render() {
        return(
            <div className="project-links">
            {this.props.launchable ? this.bothButton() : this.githubButton()}
          </div>
        );
    }
    // const { launch, github } = links;
};
export default ProjectLinks;