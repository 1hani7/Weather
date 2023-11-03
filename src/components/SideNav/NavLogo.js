import React from 'react';
import './css/NavLogo.css';
import { Link } from 'react-router-dom';

export default function NavLogo() {

    const Public = process.env.PUBLIC_URL;
    return (
        <div className="LogoWrap">
            <Link to="/">
                <img src={`${Public}/images/weatherLogo.png`} alt="LOGO" />
            </Link>
        </div>
    )
}