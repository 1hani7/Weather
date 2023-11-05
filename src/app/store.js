import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { ShiInfo, DongInfo, GooInfo } from '../features/LocationInfo/LocationSlice';
import CurrentWeatherSlice from '../features/CurrentWeather/CurrentWeatherSlice';
// import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    CurrentWeather: CurrentWeatherSlice.reducer,
    ShiChange: ShiInfo.reducer,
    GooChange: GooInfo.reducer,
    DongChange: DongInfo.reducer,
  },
});
