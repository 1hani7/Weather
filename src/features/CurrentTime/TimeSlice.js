import { createSlice } from '@reduxjs/toolkit';


let date = new Date();
let Year = date.getFullYear();
let Month = date.getMonth() + 1;
let Day = date.getDate();
let Hour = date.getHours();
let Min = date.getMinutes();
let Sec = date.getSeconds();

const TimeSlice = createSlice({
    name: 'Time',
    initialState: {
        value: null
    },
    reducers: {

    }
})

export default TimeSlice;