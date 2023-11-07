import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import './css/RainSnow.css';

export default function RainSnow(){
    const Public = process.env.PUBLIC_URL;
    const dataList = useSelector(state => {
        return state.ForeCastWeather.value.list;
    })

    const [dataSet, setData] = useState([]);

    useEffect(()=>{
        setData(dataList);
    }, [dataList]);

    return(
        <div className='RainSnowContainer'>
            <table>
                <tbody>
                    {
                        dataSet.slice(0, 9).map((v, i)=>(
                            <tr key={i}>
                                <td>{v.dt_txt.split(' ')[0].split('-').slice(1, 3).join('월 ')}일 {v.dt_txt.split(' ')[1].split(':').slice(0,2).join(':')}
                                </td>
                                <td>
                                    <img src={`${Public}/images/status/${v.weather[0].icon}.png`}/>
                                    <div>{v.weather[0].description}</div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

{/* <div className='weatherCard' key={i}>
                        <div className='weatherCardImageWrapper'>
                            <img src={`${Public}/images/status/${v.weather[0].icon}.png`}/>
                        </div>
                        <div>
                            <span>{v.dt_txt.split(' ')[0].split('-').slice(1, 3).join('월')}일</span><br/>
                            <span>{v.dt_txt.split(' ')[1].split(':').slice(0,2).join(':')}</span>&nbsp;
                            <span>{v.weather[0].description}</span>
                        </div>
                    </div> */}