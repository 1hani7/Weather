/*eslint-disable*/
import React, { useEffect } from 'react';
import './css/NavMenus.css';
import { Link, useLocation } from 'react-router-dom';

export default function NavMenus() {

    const clicked = (event) => {
        const iconList = document.querySelectorAll('.iconList');
        iconList.forEach((item) => item.classList.remove('clicked'));
        event.target.classList.add('clicked');
    }

    const init = () => {
        const iconList = document.querySelectorAll('.iconList');
        const path = useLocation().pathname;
        if( path === "/" ){
            iconList.forEach(item => item.classList.remove('clicked'));
        }
    }
    init();

    return (
        <div className="MenuContainer">
            <ul>
                <Link to="/ForeCast">
                    <li className="iconList" onClick={clicked}>
                        <i className="bi bi-graph-up-arrow"></i>
                    </li>
                </Link>
                <Link to="/RainSnow">
                    <li className="iconList" onClick={clicked}>
                        <i className="bi bi-umbrella"></i>
                        {/* <i className="bi bi-snow3"></i> */}
                    </li>
                </Link>
                <Link to="/Clouds">
                    <li className="iconList" onClick={clicked}>
                        <i className="bi bi-cloud-haze2"></i>
                    </li>
                </Link>
                <Link to="Wind">
                    <li className="iconList" onClick={clicked}>
                        <i className="bi bi-wind"></i>
                    </li>
                </Link>
            </ul>
        </div>
    )
}