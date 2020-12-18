import React, { useContext } from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { NavContext } from '../../App';

const About = () => {
    const [navActive, setNavActive] = useContext(NavContext)
    setNavActive("about")
    return (
        <div className="container text-white  about">
            <div className="col-lg-5 col-md-12 about-left">
                <h1 className="mt-3 animate__animated animate__fadeInLeft home-name">HI, I am <span className="name">Maruf Hossain</span></h1>
                <h6 className="animate__animated animate__fadeInRight about-email">E-mail: hossain815265@gmail.com</h6>
                <p className="my-detail pt-2 mb-2 animate__animated animate__zoomIn">I am a Frontend Web Developer. My goal is to work for a Company to contribute for the growth of the company while having the scope to develop my own skills. I am a quick learner person. I am aggressive to learn any new thing.</p>
                <div>
                    <div className="mt-4 d-flex pt-2 animate__animated animate__fadeInUp about-social">
                        <a target="_blank" className="fontAwesomeIcon ml-0" href="https://github.com/Maruf51"><FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a>
                        <a target="_blank" href="https://drive.google.com/file/d/1Nd-CG9cRHpEV0O-QukeydpHLiWC_dHcK/view?usp=sharing"><button className="btn btn-danger px-4 py-2">GET RESUME</button></a>
                        <a target="_blank" className="fontAwesomeIcon" href="https://www.linkedin.com/in/md-maruf-hossain-3208441aa/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12">
                <div className="animate__animated animate__flipInX">
                    <h3 className="skills text-center">My Skills</h3>
                    <ul className="d-flex justify-content-center flex-wrap skills-li">
                        <div>
                            <li>React.js</li>
                            <li>Javascript</li>
                            <li>React Hooks</li>
                            <li>React Router</li>
                        </div>
                        <div>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Firebase Auth</li>
                        </div>
                        <div>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>JQuery</li>
                            <li>Material UI</li>
                        </div>
                    </ul>
                </div>
                <div className="animate__animated animate__flipInY">
                    <h3 className="skills text-center">Tools</h3>
                    <ul className="d-flex justify-content-center flex-wrap skills-li tools-li">
                        <div>
                            <li>Git</li>
                            <li>VS Code</li>
                            <li>Netlify</li>
                        </div>
                        <div>
                            <li>Firebase</li>
                            <li>Heroku</li>
                            <li>Chrome Dev Tools</li>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;