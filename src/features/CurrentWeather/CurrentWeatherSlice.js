import { createSlice } from '@reduxjs/toolkit';
import getCurrentWeather from './CurrentWeatherAPI';

const CurrentWeatherSlice = createSlice({
    name: 'CurrentWeatherSlice',
    initialState: {
        value: {
            base: "stations",
            clouds:{
                all : 99,
            },
            cod: 200,
            coord:{
                lon: 127.4167,
                lat: 36.3333,
            },
            dit: 1699234424,
            id: 1835224,
            main: {
                feels_like: 15.69,
                grnd_level: 1002,
                humidity: 79,
                pressure: 1008,
                sea_level: 1008,
                temp: 15.97,
                temp_max: 15.97,
                temp_min: 15.97
            },
            name: "Daejeon",
            sys: {
                country: "KR",
                id: 8131,
                sunrise: 1699221451,
                sunset: 1699259419,
                type: 1,
            },
            timezone: 32400,
            visibility: 10000,
            weather:[{
                id: 804,
                main: 'Clouds',
                description: '온흐림',
                icon: '04d',
            }],
            wind: {
                deg: 254,
                gust: 16,
                speed: 7.05
            }
        },
        status: 'Init'
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentWeather.pending, (state, action)=>{
            state.status = 'Loading';
        })
        builder.addCase(getCurrentWeather.fulfilled, (state, action)=>{
            state.value = action.payload;
            state.status = 'Complete';
        })
        builder.addCase(getCurrentWeather.rejected, (state, action)=>{
            state.status = 'Fail';
        })
    }
});

export default CurrentWeatherSlice;