import React, {useState, useEffect} from 'react';
import './Clock.css';

export default function Clock() {

    const [time, setTime] = useState(getCurrentTime);

    function getCurrentTime(){
        let date = new Date();
        let Year = date.getFullYear();
        let Month = date.getMonth() + 1;
        let Day = modifyClockNumber(date.getDate());
        let Hour = modifyClockNumber(date.getHours());
        let Min = modifyClockNumber(date.getMinutes());
        let Sec = modifyClockNumber(date.getSeconds());
        const week = ['일','월','화','수','목','금','토'];
        let weekDay = week[date.getDay()];

        return [`${Year}년 `, `${Month}월 `, `${Day}일 `, `${weekDay}요일 `,
                `${Hour} : ${Min} : ${Sec}`];
    }

    useEffect(()=>{
        const TicToc = setInterval(()=>{
            setTime(getCurrentTime());
        });

        return () => clearInterval(TicToc);
    },[]);

    return(
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