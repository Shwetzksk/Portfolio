import React from 'react';
import ProfileCard from './Profilecard';
import Skill from './Skill';
import ProjectCard from './Projects';
import HobbiesCard from './Hobbies';
import frontend from './Datas/skills';
import { design } from './Datas/skills';

function App() {
    return (<div className='portfolio'>
        <ProfileCard />
        <section className='skillCard card design--skill'>
            <h1>DESIGN</h1>
            <div className='skills--container'>
                {design.map(skill => <Skill key={skill.key} tool={skill.toolName} range={skill.percentage} />)}
            </div>
        </section>
        <section className='skillCard card tool--skill'>
            <h1>FRONT END</h1>
            <div className='skills--container'>
                {frontend.map(skill => <Skill key={skill.key} tool={skill.toolName} range={skill.percentage} />)}
            </div>
        </section>
        <ProjectCard />
        <HobbiesCard />


        <footer>

            <p>Built by <a href='https://www.linkedin.com/in/k-shweta-kumari-86a47418a/' rel='noopener noreferrer' target='_blank'>Shweta</a> & Design from <a href='https://devchallenges.io/' rel='noopener noreferrer' target='_blank'>DevChallenges</a></p></footer>

    </div>)
}

export default App;