import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/Pressure.css';

export default function Pressure(){
    const basicAtm = 0.000986923;

    const pressureAmount = useSelector(state => {
        return state.CurrentWeather.value.main.grnd_level;
    });

    const currentPressure = parseInt((pressureAmount * basicAtm) * 100) / 100 ;

    return(
        <div className="PressureContainer">
            <div>{currentPressure} <span> 기압</span></div>
            <div>{pressureAmount} <span> hPa</span></div>
        </div>
    )
};