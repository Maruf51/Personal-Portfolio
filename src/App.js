import React, { createContext, useState } from 'react';
import './App.css';
import './images/hover.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Blogs from './Components/Blogs/Blogs';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import './responsive.css';
import Particles from 'react-particles-js';

export const NavContext = createContext()
function App() {
  const [navActive, setNavActive] = useState("home")
  return (
    <NavContext.Provider value={[navActive, setNavActive]}>
      <Router>
      <Navbar></Navbar>
      <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 400,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": false,
	            "opacity": 0.05
	        },
	        "move": {
	            "direction": "random",
	            "speed": 1
	        },
	        "size": {
	            "value": 2
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 1,
	                "opacity_min": 0.05
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": false,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          {/* <Route path="/resume">
            <Resume></Resume>
          </Route> */}
        </Switch>
      </Router>
    </NavContext.Provider>
  );
}

export default App;
