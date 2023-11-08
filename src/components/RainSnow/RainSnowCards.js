import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/RainSnowCards.css';

export default function RainSnowCards() {
    const Public = process.env.PUBLIC_URL;
    const data = useSelector(state => state.ForeCastWeather.value.list);
    const [rainSnowFiltered, setRainSnow] = useState([]);;


    useEffect(() => {
        const rainAlert = [];
        data.forEach(item => {
            if (item.weather[0].main === 'Rain' || item.weather[0].main === 'Snow') {
                rainAlert.push(item);
            }
        });
        setRainSnow(rainAlert);
    }, [data]);

    return (
        <div className='RainSnowCards'>
            <div className='RainSnowCardTop'>
                <div>* 5일 3시간 간격으로 비 / 눈 소식이 표시됩니다.</div>
                <div>[{rainSnowFiltered.length}건 확인]</div>
            </div>
            {
                rainSnowFiltered.map((val, idx) => (
                    <div className='RainSnowCard' key={idx}>
                        <div>
                            <img src={`${Public}/images/status/${val.weather[0].icon}.png`} />
                        </div>
                        <div className='RainSnowInfoBox'>
                            <div className='RainSnowCenterInfo'>
                                <div><i class="bi bi-thermometer-half"></i> 기온 {val.main.temp}˚C</div>
                                <div><i class="bi bi-moisture"></i> 습도 {val.main.humidity}%</div>
                                <div><i class="bi bi-tornado"></i> 바람 {val.wind.speed}m/s</div>
                            </div>
                            <div className='RainSnowCardInfo'>
                                <div>
                                    <i className="bi bi-umbrella"></i>&nbsp;&nbsp;
                                    <strong>{val.weather[0].description}</strong>
                                </div>
                                <div>
                                    <i className="bi bi-calendar"></i>&nbsp;&nbsp;
                                    {val.dt_txt.split(' ')[0].split('-')[0]}년&nbsp;
                                    {val.dt_txt.split(' ')[0].split('-')[1]}월&nbsp;&nbsp;
                                    {val.dt_txt.split(' ')[0].split('-')[2]}일
                                </div>
                                <div>
                                    <i className="bi bi-clock"></i>&nbsp;&nbsp;
                                    {val.dt_txt.split(' ')[1].split(':').slice(0, 2).join(' : ')} 시
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}