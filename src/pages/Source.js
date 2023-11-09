import React from 'react';
import './css/Source.css';

export default function Source(){
    const Public = process.env.PUBLIC_URL;

    return(
        <div className='SourceContainer'>
            <div className='informationCard'>
                <h4>SSS's Weather Report</h4>
                <div className='infoIcons'>
                    <div><img src={`${Public}/images/react.png`}/>React</div>
                    <div><img src={`${Public}/images/redux.png`}/>Redux-toolkit</div>
                    <div><img src={`${Public}/images/chartJs.png`}/>react-chartjs-2</div>
                </div>
                <p>

                </p>
                <small>
                    데이터 출처 : https://openweathermap.org/
                </small>
            </div>
        </div>
    )
}