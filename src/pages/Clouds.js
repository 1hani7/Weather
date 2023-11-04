import React from 'react';
import './css/Clouds.css';

import CloudsInfo from '../components/Clouds/CloudsInfo';
import CloudsMap from '../components/Clouds/CloudsMap';
import CloudsForeCast from '../components/Clouds/CloudsForeCast';

export default function Clouds(){
    return(
        <div className='CloudsContainer'>
            <div className='CloudsRow1'>
                <CloudsInfo/>
                <CloudsMap/>
            </div>
            <div className='CloudsRow2'>
                <CloudsForeCast/>
            </div>
        </div>
    )
}