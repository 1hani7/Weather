import React from 'react';
import './css/ForeCast.css';

import TemCast from '../components/ForeCast/TemCast';
import HumidityCast from '../components/ForeCast/HumidityCast';
import CloudCast from '../components/ForeCast/CloudCast';
import WindCast from '../components/ForeCast/WindCast';

export default function ForeCast(){
    return(
        <div className='ForeCastContainer'>
            <h3 className='ForeCastTitle'><i class="bi bi-thermometer-sun"></i> 기온</h3>
            <TemCast/>
            <h3 className='ForeCastTitle'><i class="bi bi-droplet-half"></i> 습도</h3>
            <HumidityCast/>
            <h3 className='ForeCastTitle'><i class="bi bi-cloud-fog2"></i> 흐림</h3>
            <CloudCast/>
            <h3 className='ForeCastTitle'><i class="bi bi-wind"></i> 바람</h3>
            <WindCast/>
        </div>
    )
}