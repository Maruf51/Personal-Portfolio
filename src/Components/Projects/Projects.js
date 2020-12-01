import React, { useContext } from 'react';
import { NavContext } from '../../App';
import './Projects.css';
import fakeData from '../../FakeData/FakeData'
import Project from './Project/Project';

const Projects = () => {
    const [navActive, setNavActive] = useContext(NavContext)
    setNavActive('projects')
    return (
        <div className="text-dark projects container">
            {
                fakeData.map(project => <Project id={project.id} data={project}></Project>)
            }
        </div>
    );
};

export default Projects;