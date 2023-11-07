import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const getCurrentWeather = createAsyncThunk(
  'CurrentWeatherSlice/getCurrentWeather',
  async (latLon) => {
    const key = '830c23b073518ff527cdeb58ba476ee6';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=${key}&lang=kr&units=metric`;

    const response = await axios.get(url);
    return response.data;
  })

export default getCurrentWeather;