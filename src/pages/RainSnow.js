import React from 'react';
import './css/RainSnow.css';

import RainMap from '../components/RainSnow/RainMap';
import RainInfo from '../components/RainSnow/RainInfo';
import RainForeCast from '../components/RainSnow/RainForeCast';

export default function RainSnow() {
    return (
        <div className='RainSnowContainer'>
            <div className='RainSnowRow1'>
                <RainInfo />
                <RainMap />
            </div>
            <div className='RainSnowRow2'>
                <RainForeCast />
            </div>
        </div>
    )
}