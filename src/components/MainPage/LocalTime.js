import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/LocalTime.css';

export default function LocalTime() {

    const Public = process.env.PUBLIC_URL;
    const weather = useSelector(state => {
        return state.CurrentWeather.value.weather[0];
    })
    const temp = useSelector(state => {
        return state.CurrentWeather.value.main;
    })
    const location = useSelector(state => {
        return state.CurrentWeather.value.name;
    })
    const latLon = useSelector(state => {
        return state.CurrentWeather.value.coord;
    })

    const [time, setTime] = useState(null);

    useEffect(() => {
        const t = setInterval(() => getCurrentTime(setTime), 100);
        return () => {
            clearInterval(t);
        }
    }, [])

    return (
        <div className="LocalTimeContainer">
            <div className='NowWeatherContainer'>
                <img src={`${Public}/images/status/${weather.icon}.png`} />
            </div>
            <div className='NowWeatherDegree'>
                {parseInt(temp.temp)}℃
                <div className='NowWeatherFeels'>
                    체감온도 {parseInt(temp.feels_like)}℃
                </div>
            </div>
            <div className='NowWeatherInfo'>
                <ul>
                    <li>
                        <i class="bi bi-info-circle"></i>{weather.description}
                    </li>
                    <li>
                        <i class="bi bi-geo-alt"></i>{location}
                    </li>
                    <li>
                        <i class="bi bi-globe-asia-australia"></i>
                        <div>
                            <div>위도 {latLon.lat}&nbsp;</div>
                            <div>경도 {latLon.lon}</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
};

function modifyClockNumber(t) {
    if (parseInt(t) < 10) {
        return "0" + t;
    } else return t;
}

function getCurrentTime(setTime) {
    let date = new Date();
    let Hour = date.getHours();
    let HourModify = Hour > 12 ? 'PM ' + (Hour - 12) : 'AM ' + Hour;
    let Min = modifyClockNumber(date.getMinutes());
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let weekDay = week[date.getDay()];

    // const timeDate = `${weekDay} ${HourModify}:${Min}`
    const timeDate = <div className='timeWeek'>
        <span>{weekDay}</span>&nbsp;
        <span>{HourModify}:{Min}</span>
    </div>;
    setTime(timeDate);
}