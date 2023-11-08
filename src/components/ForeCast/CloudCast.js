import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './css/CloudCast.css';

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
            max: 100,
            ticks: {
                color: 'white',
                callback: function (val) {
                    return val + '%';
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
                    const unit = '%';
                    return `${label} ${value} ${unit}`;
                }
            }
        },
        interaction: {
            mode: 'index',
        },
    },
};

export default function CloudCast(){
    const dataList = useSelector(state => {
        return state.ForeCastWeather.value.list;
    })
    const changeTarget = useSelector(state => {
        return state.ForeCastWeather;
    })

    const [dateLabel, setDateLabel] = useState([]);
    const [cloudData, setCloudData] = useState([]);

    const data = {
        labels: dateLabel,
        datasets: [
            {
                data: cloudData,
                borderColor: 'rgb(160, 160, 160)',
                borderWidth: 4,
            }
        ],
    };

    useEffect(() => {
        setLabelData(dataList, setDateLabel);
        setHumidityData(dataList, setCloudData);
    }, [changeTarget])

    return(
        // 흐림 정도
        <div className='CloudCastContainer'>
            <Line options={options} data={data} className='chart' />
        </div>
    )
}

function setHumidityData(dataList, setCloudData){
    const temp = [];
    dataList.forEach(item => {
        temp.push(
            item.clouds.all
        );
    });
    setCloudData(temp);
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