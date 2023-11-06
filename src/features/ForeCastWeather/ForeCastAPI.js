import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


const getForeCastWeather = createAsyncThunk(
  'ForeCastWeatherSlice/getForeCastWeather',
  async () => {
    const lat = 36.3333;
    const lon = 127.4167;
    const key = '46fa5bc803d310470ba806998f13de3f';
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&lang=kr&units=metric`;

    const response = await axios.get(url);
    return response.data;
  })

export default getForeCastWeather;