import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/Humidity.css';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export default function Humidity() {
    const humidityAmount = useSelector(state => {
        return state.CurrentWeather.value.main.humidity;
    });

    const [dataArr, setDataArr] = useState([]);

    const data = {
        datasets: [
            {
                label: '구름',
                data: dataArr,
                backgroundColor: [
                    'rgba(0,90,255,0.6)',
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
        setDataArr([humidityAmount, 100 - humidityAmount]);
    }, [humidityAmount])

    return (
        <div className="HumidityContainer">
            <div><Doughnut data={data} options={options} /></div>
            <div className='cloudsInfo'>
                <div><i class="bi bi-droplet"></i></div>
                <div>{humidityAmount}%</div>
            </div>
        </div>
    )
};