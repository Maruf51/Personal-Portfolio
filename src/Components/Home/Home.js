import React, { useContext } from 'react';
import './Home.css';
import myPhoto from '../../images/Maruf.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { NavContext } from '../../App';
import Typed from 'react-typed';

const Home = () => {
    const [navActive, setNavActive] = useContext(NavContext)
    setNavActive("home")
    return (
        <div className="home__home text-center m-auto text-white home align-items-center pt-5">
            <img className="myPhoto mt-5 wow bounceInUp animate__animated animate__fadeIn" src={myPhoto} alt=""/>
            <div className="over">
                <h2 className="mt-3 animate__animated animate__fadeInLeft home-name">HI, I am <span className="name">Maruf Hossain</span></h2>
            </div>
            <div className="over">
                <h3 className="developer"><Typed
                    strings={['Frontend Developer | Programmer | MERN Developer']}
                    typeSpeed={45}
                /></h3>
            </div>
            <p className="my-detail pt-2 mb-2 animate__animated animate__zoomIn">I am a Frontend Web Developer. My goal is to work for a Company to contribute for the growth of the company while having the scope to develop my own skills.</p>
            <p className="email mb-1 animate__animated animate__flipInY">E-mail: hossain815265@gmail.com</p>
            <div className="d-flex text-center justify-content-center pt-2 animate__animated animate__fadeInUp">
                <a target="_blank" className="fontAwesomeIcon" href="https://github.com/Maruf51"><FontAwesomeIcon icon={faGithubSquare}></FontAwesomeIcon></a>
                <a target="_blank" href="https://drive.google.com/file/d/1x8AXNylw8dfnBpGD1InbrE_rLalYGSzE/view?usp=sharing"><button className="btn btn-danger px-4 py-2">GET RESUME</button></a>
                <a target="_blank" className="fontAwesomeIcon" href="https://www.linkedin.com/in/md-maruf-hossain-3208441aa/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            </div>
        </div>
    );
};

export default Home;