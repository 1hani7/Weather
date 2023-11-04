import {CurrentWeatherSlice} from './CurrentWeatherSlice';
import axios from 'axios';

// API axios Call
export const getCurrentWeather = () => {
    const lat = 37.56;
    const lon = 126.98;
    const key = `830c23b073518ff527cdeb58ba476ee6`;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;
    
    return (dispatch) => {
        axios.get(url)
        .then(response => {
            dispatch()
        })
        .catch(error => {
            console.error(error);
        });
    }
}