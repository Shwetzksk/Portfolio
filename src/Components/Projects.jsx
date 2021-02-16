import React from 'react';

import projects from './Datas/project';

function ProjectCard() {
    return (
        <section className='projectCard'>
            <div className="projectHeader card"> <p className="projectHeader--text">Projects ({`${projects.length}`})</p> </div>

            {projects.map(project => <Project
                key={project.key}
                image={project.imageAddress}
                hashtags={project.tag}
                projectName={project.name} projectDescription={project.about}
                demo={project.demoLink}
                code={project.codeLink}
            />)}
        </section>);
}

function Project(props) {

    return (<div className="project card" id={props.key}>

        <div className='project--image'><img src={props.image} /></div>
        <div className='project--text'>
            <p className="hashtags">{props.hashtags}</p>

            <h1>{props.projectName}</h1>
            <p className="description">{props.projectDescription}</p>

            <div className='btn-container'>
                <a href={props.demo} rel='noopener noreferrer' target='_blank'> <button className='btn btn--demo'  >Demo </button></a>
                <a href={props.code} rel='noopener noreferrer' target='_blank'> <button className='btn btn--code' >Code</button></a>

            </div>
        </div>
    </div>);
}

export default ProjectCard;