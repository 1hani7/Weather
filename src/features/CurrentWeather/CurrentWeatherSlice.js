import { createSlice } from '@reduxjs/toolkit';

// Slice reducer
const CurrentWeatherSlice = createSlice({
    name: 'CurrentWeatherSlice',
    initialState: [],
    reducers:{
        ChangeCurrentWeather:(state, action) => {
            return action.payload;
        }
    }
});

export const { ChangeCurrentWeather } = CurrentWeatherSlice.actions;

export default CurrentWeatherSlice;