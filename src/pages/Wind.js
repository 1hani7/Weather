import React from 'react';
import './css/Wind.css';

import WindInfo from '../components/Wind/WindInfo';
import WindMap from '../components/Wind/WindMap';
import WindForeCast from '../components/Wind/WindForeCast';

export default function Wind(){
    return(
        <div className='WindContainer'>
            <div className='WindRow1'>
                <WindInfo/>
                <WindMap/>
            </div>
            <div className='WindRow2'>
                <WindForeCast/>
            </div>
        </div>
    )
}