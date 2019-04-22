import React from 'react';

import ProjectCard from './projectcard/projectcard';
import './projects.css';

class Projects extends React.Component {
    render() {
        const { projects, colorTheme } = this.props;
        return (
            <section name="projects">
                <div className="container">
                    <h1 className={`section-title ${colorTheme}-underline`} >Projects</h1>
                    {projects.map(proj => (
                        <ProjectCard
                            title={proj.title}
                            description={proj.description}
                            skills={proj.skills}
                            links={proj.links}
                            image={proj.image}
                            key={proj.title}
                            colorTheme={colorTheme}
                        />
                    ))}
                </div>
            </section>
        );
    }
};
export default Projects;