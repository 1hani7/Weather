import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/Clouds.css';


export default function Clouds() {
    const data = useSelector(state => state.ForeCastWeather.value.list);
    const [dataList, setDataList] = useState([]);

    useEffect(() => {
        const temp = [];
        data.forEach(item => {
            if (item.weather[0].main === 'Clouds') {
                temp.push(item);
            }
        });
        setDataList(temp);
        console.log(temp)
    }, [data]);

    return (
        <div className='CloudsContainer'>
            <h4>* 3시간 간격으로 구름의 양을 표시합니다.</h4>
            {
                dataList.map((val, idx, arr) => (
                    <div className='CloudsInfoBar' key={idx}>
                        <div className='CloudsAmount'>
                            <div className='cloudGraphBox'>
                                <div className='cloudGraphBar'
                                     style={{width : `${val.clouds.all}%`}}
                                ></div>
                            </div>
                            <div>
                                <strong>{val.clouds.all}%</strong>&nbsp;
                            </div>
                        </div>
                        <div className='CloudsTimeAbout'>
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
                ))
            }
        </div >
    )
}