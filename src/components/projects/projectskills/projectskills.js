import React from 'react';

import './projectskills.css';

class ProjectSkills extends React.Component {
    render() {
        return (
            <div className="project-skills">
              {this.props.skills.map((skill, index) => {
                return (
                    <span className={`project-skill ${this.props.colorTheme}-border`} key={index}>
                        {skill}
                    </span>
                );
              })}
            </div>
        );
    };
}
export default ProjectSkills;