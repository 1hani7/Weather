import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';

import './css/CurrentTemp.css';

export default function CurrentTemp(){

    const data = useSelector(state=>{
        return state.CurrentWeather.value.main;
    })

    const [temp, setTemp] = useState('Loading...');
    const [feelTemp, setFeelTemp] = useState('Loading...');

    useEffect(()=>{
        setTemp(data.temp);
        setFeelTemp(data.feels_like);
    },[])

    return(
        <div className="CurrentTempContainer">
            <div className='CurrentTempNow'>{temp}</div>
            <div className='CurrentTempFeel'>{feelTemp}</div>
        </div>
    )
}