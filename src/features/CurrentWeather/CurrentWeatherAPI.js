import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ChangeCurrentWeather from './CurrentWeatherSlice';

const getCurrentWeather = createAsyncThunk('post/getCurrentWeather', async () => {
  const lat = 36.3333;
  const lon = 127.4167;
  const key = '46fa5bc803d310470ba806998f13de3f';
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=kr&units=metric`;
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
})

// async function getCurrentWeather() {
//   const lat = 36.3333;
//   const lon = 127.4167;
//   const key = '46fa5bc803d310470ba806998f13de3f';
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&lang=kr&units=metric`;

//   try {
//     const response = await axios.get(url);
//     console.log(response.data);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

export default getCurrentWeather;