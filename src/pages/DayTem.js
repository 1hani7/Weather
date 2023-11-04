import React from 'react';
import './css/DayTem.css';

import MinMaxTemp from '../components/DayTem/MinMaxTemp';
import FeelTemp from '../components/DayTem/FeelTemp';
import DayForecast from '../components/DayTem/DayForecast';
import TempMap from '../components/DayTem/TempMap';

export default function DayTem() {
    return (
        <div className='DayTemContainer'>
            <div className='DayTemTop'>
                <div className='DayTemTopLeft'>
                    <MinMaxTemp />
                    <FeelTemp />
                </div>
                <div className='DayTemMapBox'><TempMap /></div>
            </div>
            <div className='DayTemForeBox'>
                <DayForecast />
            </div>
        </div>
    )
}