import { configureStore } from '@reduxjs/toolkit';
import { ShiInfo, DongInfo, GooInfo } from '../features/LocationInfo/LocationSlice';
import CurrentWeatherSlice from '../features/CurrentWeather/CurrentWeatherSlice';
import ForeCastWeatherSlice from '../features/ForeCastWeather/ForeCastSlice';

export const store = configureStore({
  reducer: {
    ForeCastWeather: ForeCastWeatherSlice.reducer,
    CurrentWeather: CurrentWeatherSlice.reducer,
    ShiChange: ShiInfo.reducer,
    GooChange: GooInfo.reducer,
    DongChange: DongInfo.reducer,
  },
});
