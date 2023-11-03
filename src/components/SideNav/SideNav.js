import React from 'react';
import './css/SideNav.css';

import NavLogo from './NavLogo';
import NavMenus from './NavMenus';


export default function SideNav(){

    return(
        <div className="NavContainer">
            <NavLogo/>
            <NavMenus/>
        </div>
    )
};