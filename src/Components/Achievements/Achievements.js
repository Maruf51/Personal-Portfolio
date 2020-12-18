import React, { useContext } from 'react';
import { NavContext } from '../../App';
import './Achievements.css';
import achievement1 from '../../images/MD. Maruf Hossain.png'

const Achievements = () => {
    const [navActive, setNavActive] = useContext(NavContext)
    setNavActive('achievements')

    return (
        <div className="achievements">
            <img src={achievement1} alt=""/>
        </div>
    );
};

export default Achievements;