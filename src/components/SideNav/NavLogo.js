import React from 'react';
import './css/NavLogo.css';
import { Link } from 'react-router-dom';

export default function NavLogo() {

    const Public = process.env.PUBLIC_URL;
    return (
        <div className="LogoWrap">
            <Link to="/">
                <i class="bi bi-house-door"></i>
                {/* <img src={`${Public}/images/weatherLogo.png`} alt="LOGO" /> */}
            </Link>
        </div>
    )
}