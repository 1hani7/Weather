import { createSlice } from '@reduxjs/toolkit';

const ShiInfo = createSlice({
    name: 'ShiInfo',
    initialState: '서울특별시',
    reducers: {
        ChangeShi: (state, action) => {
            return action.payload;
        }
    }
});

const DongInfo = createSlice({
    name: 'DongInfo',
    initialState: null,
    reducers: {
        ChangeDong: (state, action) => {
            return action.payload;
        }
    }
});

const GooInfo = createSlice({
    name: 'GooInfo',
    initialState: null,
    reducers: {
        ChangeGoo: (state, action) => {
            return action.payload;
        }
    }
});


export {ShiInfo, DongInfo, GooInfo};

export const {ChangeShi} = ShiInfo.actions;
export const {ChangeDong} = DongInfo.actions;
export const {ChangeGoo} = GooInfo.actions;