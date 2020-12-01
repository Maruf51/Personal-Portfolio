import React, { useContext } from 'react';
import { NavContext } from '../../App';
import './Resume.css';

const Resume = () => {
    const [navActive, setNavActive] = useContext(NavContext)
    setNavActive('resume')
    return (
        <div className="resume-page container animate__animated animate__fadeInDown">
            <div className="d-flex justify-content-between pt-2">
                <h2>MD. Maruf Hossain</h2>
                <a target="_blank" href="https://drive.google.com/file/d/1x8AXNylw8dfnBpGD1InbrE_rLalYGSzE/view?usp=sharing"><button className="btn btn-outline-danger px-4 py-2">DOWNLOAD RESUME</button></a>
            </div>
            <div className="d-flex justify-content-between pt-2">
                <h5 className="m-0">Frontend Web Developer</h5>
                <p className="m-0">hossain815265@gmail.com</p>
            </div>
            <div className="d-flex justify-content-between pt-1">
                <p className="m-0">Satkhira, Bangladesh</p>
                <a target="_blank" href="https://www.linkedin.com/in/md-maruf-hossain-3208441aa/">https://www.linkedin.com/in/md-maruf-hossain-3208441aa/</a>
            </div>
            <div className="d-flex justify-content-between pt-1">
                <p className="m-0">+88 01993-980666</p>
                <a target="_blank" href="https://github.com/Maruf51">https://github.com/Maruf51</a>
            </div>
            <div className="text-right pt-1">
                <a target="_blank" href="https://maruf51.github.io/my-personal-website/">https://maruf51.github.io/my-personal-website/</a>
            </div>
            <hr/>
            <div className="description">
                <h4>DESCRIPTION</h4>
                <p className="ml-4">I am a Frontend Web Developer. My goal is to work for a Company to contribute for the growth of the company while having the scope to develop my own skills. I am a quick learner person. I am aggressive to learn any new thing.</p>
            </div>
            <div className="description">
                <h4>SKILLS</h4>
                <ul>
                    <li className="d-flex"><strong>Expert: </strong><p className="ml-1 mb-0">React js, Javascript, Bootstrap, React Bootstrap, HTML, CSS, React Router, React Hooks, Firebase Auth</p></li>
                    <li className="d-flex"><strong>Compatible: </strong><p className="ml-1 mb-0">Node js, Mongo DB, Material UI, Media Query</p></li>
                    <li className="d-flex"><strong>Familiar: </strong><p className="ml-1 mb-0">SCSS, PHP, MySQL, jQuery</p></li>
                    <li className="d-flex"><strong>Tools: </strong><p className="ml-1 mb-0">Git, VS Code, Netlify, Firebase, Heroku, Chrome Dev Tools</p></li>
                </ul>
            </div>
            <div className="description">
                <h4>PROJECTS</h4>
                <div className="mb-4">
                    <ul className="mb-0">
                        <li className="resume-li mb-0">
                            MERN Creative Agency | <a target="_blank" href="https://creative-agency-assignment.firebaseapp.com/">Website</a> | <a target="_blank" href="https://github.com/Maruf51/Creative-Agency-Live">Github</a> | <a target="_blank" href="https://github.com/Maruf51/Creative-Agency-server">Github Backend</a>
                        </li>
                    </ul>
                    <ul className="ml-3 mb-1">
                        <li className="resume-list">A full-stack Website where you can run your Services with full Responsive for any device.</li>
                        <li className="resume-list">Admin can enter new services. And admin can see who wants which service and work for them.</li>
                        <li className="resume-list">Users can add Reviews on your work. All users can see all the Reviews.</li>
                    </ul>
                    <strong className="ml-5"><span className="technology">Technology:</span> React js, React Router, Node js, Mongo DB, Firebase Auth, Heroku, Bootstrap</strong>
                </div>
                <div className="mb-4">
                    <ul className="mb-0">
                        <li className="resume-li mb-0">
                            MERN Hot Onion Foods | <a target="_blank" href="https://hot-onion-foods.web.app/">Website</a> | <a target="_blank" href="https://github.com/Maruf51/Hot-Onion-Foods">Github</a> | <a target="_blank" href="https://github.com/Maruf51/Hot-Onion-Foods-Server">Github Backend</a>
                        </li>
                    </ul>
                    <ul className="ml-3 mb-1">
                        <li className="resume-list">A full-stack restaurant app where you can order your favorite food from the menu.</li>
                        <li className="resume-list">You have options for breakfast, lunch, and dinner. Admin can enter new foods.</li>
                        <li className="resume-list">Pay online using your credit card and enjoy the most delicious dummy food.</li>
                    </ul>
                    <strong className="ml-5"><span className="technology">Technology:</span> React js, React Router, Node js, Mongo DB, Firebase Auth, Heroku, Bootstrap</strong>
                </div>
                <div className="mb-4">
                    <ul className="mb-0">
                        <li className="resume-li mb-0">
                            Travel Guru | <a target="_blank" href="https://travel-guru-maruf.web.app/">Website</a> | <a target="_blank" href="https://github.com/Maruf51/assignment-9-travel-guru">Github</a> 
                        </li>
                    </ul>
                    <ul className="ml-3 mb-1">
                        <li className="resume-list">A website for tourist to book any tourist spot and hotel. Now there is only three places to go.</li>
                        <li className="resume-list">Users can book any tourist spot and go there for vacation. And we can show them more cheapest hotel with a map.</li>
                        <li className="resume-list">Admin can add a new tourist spot.</li>
                    </ul>
                    <strong className="ml-5"><span className="technology">Technology:</span> React js, React Router, Firebase Auth, Bootstrap</strong>
                </div>
            </div>
            <div className="description">
                <h4>ONLINE COURSES</h4>
                <ul>
                    <li className="resume-list"><b>Programming Hero Bangla Web Course</b> by Programming Hero</li>
                    <li className="resume-list"><b>Responsive Web Design</b> by freeCodeCamp</li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;