import React, {useState, useEffect} from 'react';
import './css/LocalTime.css';

export default function LocalTime(){

    const [time, setTime] = useState(null);

    useEffect(()=>{
        const t = setInterval(() => getCurrentTime(setTime), 1000);
        return () => {
            clearInterval(t);
        }
    },[])

    return(
        <div className="LocalTimeContainer">
            <div>
                
            </div>
            <div className='NowTimeContainer'>
                {time}
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
    let HourModify = Hour > 12 ? '오후 ' + (Hour - 12) : '오전 ' + Hour;
    let Min = modifyClockNumber(date.getMinutes());
    const week = ['일', '월', '화', '수', '목', '금', '토'];
    let weekDay = week[date.getDay()];

    const timeDate = `${weekDay} ${HourModify}시 ${Min}분`

    setTime(timeDate);
}