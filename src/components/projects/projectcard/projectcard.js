import React from 'react';

import ProjectSkills from '../projectskills/projectskills';
import ProjectLinks from '../projectlinks/projectlinks';

import './projectcard.css';

class ProjectCard extends React.Component {
    render() {
        const { image, imageAlt, title, description, skills, links , colorTheme } = this.props;
        return (
        <div className="project-card">
            <div className="transparent-background">
                <img className="project-image" src={image} alt={imageAlt}/>
            </div>
            <div className="project-background" />
            <div className="project-content">
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={{ __html: description }} />
            <ProjectSkills skills={skills} colorTheme={colorTheme}/>
            <ProjectLinks links={links} colorTheme={colorTheme}/>
            </div>
        </div>
        );
    };
}
export default ProjectCard;