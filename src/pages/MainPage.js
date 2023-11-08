import React from 'react';
import './css/MainPage.css';

import LocalTime from '../components/MainPage/LocalTime';
import CurrentTemp from '../components/MainPage/CurrentTemp';
import Pressure from '../components/MainPage/Pressure';
import Humidity from '../components/MainPage/Humidity';
import Windy from '../components/MainPage/Windy';
import Cloudy from '../components/MainPage/Cloudy';
import RainSnow from '../components/MainPage/RainSnow';

export default function MainPage(){
    return(
        <div className="MainPage">
            <div className="row1">
                <LocalTime/>
                <CurrentTemp/>
            </div>
            <div className="row2">
                <div className="row2Left">
                    <Pressure/>
                    <Humidity/>
                    <Cloudy/>
                    <Windy/>
                </div>
                <div className="row2Right">
                    <RainSnow/>
                </div>
            </div>
        </div>
    )
}