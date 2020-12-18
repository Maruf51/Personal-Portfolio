import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavContext } from '../../App';
import './Navbar.css';
import '../../images/hover.css';
import logo from '../../images/logo.png';

const Navbar = () => {
    const [navActive, setNavActive] = useContext(NavContext)
    return (
        <div className="fullNavBar fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <Link to="/" className="navbar-brand"><img className="logo" src={logo} alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto d-flex align-items-center">
                            <Link to="/" className={navActive === "home" ? 'nav-link px-3 py-2 navActive' : 'nav-link px-3 py-2'}>HOME</Link>
                            <Link to="/about" className={navActive === 'about' ? 'nav-link px-3 py-2 navActive' : 'nav-link px-3 py-2'}>ABOUT</Link>
                            <Link to="/projects" className={navActive === 'projects' ? 'nav-link px-3 py-2 navActive' : 'nav-link px-3 py-2'}>PROJECTS</Link>
                            <Link to="/achievements" className={navActive === 'achievements' ? 'nav-link px-3 py-2 navActive' : 'nav-link px-3 py-2'}>ACHIEVEMENTS</Link>
                            <Link to="/blogs" className={navActive === 'blogs' ? 'nav-link px-3 py-2 navActive' : 'nav-link px-3 py-2'}>BLOGS</Link>
                            <Link to="/contact" className={navActive === 'contact' ? 'nav-link px-3 py-2 navActive' : 'nav-link px-3 py-2'}>CONTACT ME</Link>
                            {/* <Link to="/resume" className={navActive === 'resume' ? 'nav-link px-3 py-2 navActive' : 'nav-link px-3 py-2'}>RESUME</Link> */}
                        </div>
                        <div className="text-center">
                            <a target="_blank"href="https://drive.google.com/file/d/1Nd-CG9cRHpEV0O-QukeydpHLiWC_dHcK/view?usp=sharing"><button className="nav-resume hvr-sweep-to-right">RESUME</button></a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;