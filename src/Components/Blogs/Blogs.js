import React, { useContext } from 'react';
import { NavContext } from '../../App';
import './Blogs.css';

const Blogs = () => {
    const [navActive, setNavActive] = useContext(NavContext)
    setNavActive('blogs')
    return (
        <div className="blogs text-white animate__animated animate__fadeIn">
            <h1>Blogs Coming Soon</h1>
        </div>
    );
};

export default Blogs;
