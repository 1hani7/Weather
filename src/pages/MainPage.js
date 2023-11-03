import React from 'react';
import './css/MainPage.css';

import LocalTime from '../components/MainPage/LocalTime';

export default function MainPage(){
    return(
        <div className="MainPage">
            <LocalTime></LocalTime>
        </div>
    )
}