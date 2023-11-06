import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Clock.css';

export default function Clock() {
    const dispatch = useDispatch();
    const test = useSelector(state => {
        return state.Time;
    })
    const [time, setTime] = useState(null);

    function getCurrentTime() {
        let date = new Date();
        let Year = date.getFullYear();
        let Month = date.getMonth() + 1;
        let Day = modifyClockNumber(date.getDate());
        let Hour = modifyClockNumber(date.getHours());
        let Min = modifyClockNumber(date.getMinutes());
        let Sec = modifyClockNumber(date.getSeconds());
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        let weekDay = week[date.getDay()];

        const timeDate = [
            Year + '년 ', Month + '월 ', Day + '일 ',
            weekDay + '요일 ', Hour + ':', Min + ':', Sec
        ]

        setTime(timeDate);
    }

    useEffect(() => {
        const TicToc = setInterval(() => {
            getCurrentTime();
        }, 1000);

        return () => clearInterval(TicToc);
    }, []);

    return (
        <div className='ClockContainer'>
            {time}
        </div>
    )
}

function modifyClockNumber(t) {
    if (parseInt(t) < 10) {
        return "0" + t;
    } else return t;
}