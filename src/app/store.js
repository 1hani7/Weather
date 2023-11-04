import { configureStore } from '@reduxjs/toolkit';
import CurrentWeatherSlice from '../features/CurrentWeather/CurrentWeatherSlice';

export const store = configureStore({
  reducer: {
    CurrentWeather: CurrentWeatherSlice.reducer,
    
  }
});
