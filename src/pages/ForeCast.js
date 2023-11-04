import React from 'react';
import './css/ForeCast.css';

import TemCast from '../components/ForeCast/TemCast';
import HumidityCast from '../components/ForeCast/HumidityCast';
import CloudCast from '../components/ForeCast/CloudCast';
import WindCast from '../components/ForeCast/WindCast';

export default function ForeCast(){
    return(
        <div className='ForeCastContainer'>
            <TemCast/>
            <HumidityCast/>
            <CloudCast/>
            <WindCast/>
        </div>
    )
}