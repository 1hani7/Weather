import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/Windy.css';

export default function Windy(){
    const Public = process.env.PUBLIC_URL;

    const windAmount = useSelector(state => {
        return state.CurrentWeather.value.wind;
    });

    const deg = windAmount.deg;
    const gust = windAmount.gust;
    const speed = windAmount.speed;

    const [hardness, setHardness] = useState('');

    const [degree, setDegree] = useState('rotate(0deg)');

    useEffect(()=>{
        setDegree(`rotate(${deg}deg)`);
        if( speed < 10 ){
            setHardness('보통 바람')
        }else if( 10 <= speed && speed < 15 ){
            setHardness('약간 강풍')
        }else if( 15 <= speed && speed < 20 ){
            setHardness('강풍')
        }else if( 20 <= speed && speed < 25 ){
            setHardness('매우 강풍')
        }else if( 25 <= speed ){
            setHardness('초강풍')
        }
    }, []);

    return(
        <div className="WindyContainer">
            <div className='windMeter'>
                <div className='WindMeterCase'>
                    <img src={`${Public}/images/windMeter.png`} />
                </div>
                <div className='WindMeterArrow'>
                    <img style={{transform : degree, transition: '0.5s ease'}}
                    src={`${Public}/images/windMeterArrow.png`} />
                </div>
            </div>
            <div className='windMeterInfo'>
                {hardness} {speed}m/s <br/>
                돌풍 {gust}m/s
            </div>
        </div>
    )
};