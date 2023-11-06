import { createSlice } from '@reduxjs/toolkit';

const TimeSlice = createSlice({
    name: 'Time',
    initialState: {
        year: 0,
        month: 0,
        day: 0,
        weekDay: '',
        hour: 0,
        minute: 0,
        second: 0,
      },
    reducers: {
        updateTime : (state, action) => {
            return action.payload;
        }
    }
})

export default TimeSlice;

export const {updateTime} = TimeSlice.actions;