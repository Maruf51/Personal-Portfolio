import React from 'react';
import './Project.css';
import WOW from 'wowjs';

   var wow = new WOW.WOW({mobile: true}).init();
const Project = ({data}) => {
    
    
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5 wow animate__animated animate__fadeInUp project-parent" >
            <div className="project">
                <img className="w-100" src={data.image} alt=""/>
                <h3 className="pt-3">{data.name}</h3>
                <p>{data.description}</p>
                <a target="_blank"href={data.live}><button className="btn btn-outline-dark px-3 py-2">LIVE SITE</button></a>
                <a target="_blank"href={data.github}><button className="btn btn-outline-dark px-3 py-2">GITHUB</button></a>
            </div>
        </div>
    );
};

export default Project;