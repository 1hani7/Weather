import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/Cloudy.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export default function Cloudy() {

    const cloudAmount = useSelector(state => {
        return state.CurrentWeather.value.clouds.all;
    });

    const [dataArr, setDataArr] = useState([]);

    const data = {
        datasets: [
            {
                label: '구름',
                data: dataArr,
                backgroundColor: [
                    'rgba(255,255,255,0.4)',
                    'rgba(0,0,0,0.2)',
                ],
                borderWidth: 0,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false, 
            },
            interaction: {
                mode: 'index',
            },
        },
    };

    useEffect(() => {
        setDataArr([]);
        setDataArr([cloudAmount, 100 - cloudAmount]);
    }, [cloudAmount])

    return (
        <div className="CloudyContainer">
            <div><Doughnut data={data} options={options} /></div>
            <div className='cloudsInfo'>
                <div><i className="bi bi-cloud"></i></div>
                <div>{cloudAmount}%</div>
            </div>
        </div>
    )
};

