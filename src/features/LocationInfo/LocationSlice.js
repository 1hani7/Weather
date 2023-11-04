import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


function getLocationFile(){
    let Location = null;
    const path = '../../data/KoreanLatLon.json';
    axios.get(path)
    .then(res => {
        Location = res;
    })
    .catch(err => {
        console.error(err);
    })

    return Location;
}

const LocationData = createSlice({
    name: 'LocationData',
    initialValue: getLocationFile,
    reducers: {}
});

export default LocationData;