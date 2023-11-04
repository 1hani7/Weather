import { createSlice } from '@reduxjs/toolkit';

// Slice reducer
const CurrentWeatherSlice = createSlice({
    name: 'CurrentWeatherSlice',
    initialValue: [],
    reducers:{
        ChangeCurrentWeather:(state, action) => {
            return action.payload;
        }
    }
});

export const { CurrentWeatherData } = CurrentWeatherSlice.actions;

export default CurrentWeatherSlice;