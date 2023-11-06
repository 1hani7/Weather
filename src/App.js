/* eslint-disable */
import React, { Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import SideNav from './components/SideNav/SideNav';
import SearchBar from './components/SearchSystem/SearchBar';
import Clock from './components/Clock/Clock';
import getCurrentWeather from './features/CurrentWeather/CurrentWeatherAPI';

const MainPage = React.lazy(() => import('./pages/MainPage'));
const DayTem = React.lazy(() => import('./pages/DayTem'));
const ForeCast = React.lazy(() => import('./pages/ForeCast'));
const RainSnow = React.lazy(() => import('./pages/RainSnow'));
const Clouds = React.lazy(() => import('./pages/Clouds'));
const Wind = React.lazy(() => import('./pages/Wind'));

function App() {
  const dispatch = useDispatch();
  const test = useSelector(state=>{
    return state.CurrentWeather.value;
  })
  
  useEffect(()=>{
    // dispatch(getCurrentWeather());
    console.log(test);
  },[])

  return (
    <div className="App">
      <SideNav />
      <div className="Contents">
        <Suspense fallback={<div className="Loading">Now Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/DayTem" element={<DayTem />} />
            <Route path="/ForeCast" element={<ForeCast />} />
            <Route path="/RainSnow" element={<RainSnow />} />
            <Route path="/Clouds" element={<Clouds />} />
            <Route path="/Wind" element={<Wind />} />
          </Routes>
        </Suspense>
      </div>
      <SearchBar />
      <Clock />
    </div>
  );
}

export default App;
