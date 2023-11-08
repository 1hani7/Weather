import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/TemCast.css';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    maintainAspectRatio: false,
    scales: {
        x: {
            ticks: {
                color: 'white',
            },
            grid: {
                color: 'rgba(255, 255, 255, 0)',
            }
        },
        y: {
            min: 0,
            max: 40,
            ticks: {
                color: 'white',
                callback: function (val) {
                    return val + '˚C';
                }
            },
            grid: {
                color: 'rgba(255, 255, 255, 0.3)',
            }
        }
    },
    plugins: {
        legend: {
            display: false,
        },
        tooltip: {
            enabled: true,
            callbacks: {
                label: function (context) {
                    const label = context.dataset.label || '';
                    const value = context.parsed.y || 0;
                    const unit = '˚C';
                    return `${label} ${value} ${unit}`;
                }
            }
        },
        interaction: {
            mode: 'index',
        },
    },
};

export default function TemCast() {
    const dataList = useSelector(state => {
        return state.ForeCastWeather.value.list;
    })
    const changeTarget = useSelector(state => {
        return state.ForeCastWeather;
    })

    const [dateLabel, setDateLabel] = useState([]);
    const [tempData, setTempData] = useState([]);

    const data = {
        labels: dateLabel,
        datasets: [
            {
                data: tempData,
                borderColor: 'rgb(255, 70, 10)',
                borderWidth: 4,
            }
        ],
    };

    useEffect(() => {
        setLabelData(dataList, setDateLabel);
        setDayTempData(dataList, setTempData);
    }, [changeTarget])

    return (
        // 온도변화 그래프, 체감온도 그래프
        <div className='TemCastContainer'>
            <Line options={options} data={data} className='chart' />
        </div>
    )
}

function setDayTempData(dataList, setTempData){
    const temp = [];
    dataList.forEach(item => {
        temp.push(
            item.main.temp
        );
    });
    setTempData(temp);
}

function setLabelData(dataList, setDateLabel) {
    const temp = [];
    dataList.forEach(item => {
        temp.push(
            item.dt_txt.split(' ')[1].split(':').slice(0, 2).join(':')
        );
    });
    setDateLabel(temp);
}