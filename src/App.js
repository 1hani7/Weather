/* eslint-disable */
import React, { Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import SideNav from './components/SideNav/SideNav';
import SearchBar from './components/SearchSystem/SearchBar';
import Clock from './components/Clock/Clock';

const MainPage = React.lazy(() => import('./pages/MainPage'));
const ForeCast = React.lazy(() => import('./pages/ForeCast'));
const RainSnow = React.lazy(() => import('./pages/RainSnow'));
const Clouds = React.lazy(() => import('./pages/Clouds'));
const Source = React.lazy(() => import('./pages/Source'));
// const Wind = React.lazy(() => import('./pages/Wind'));

function App() {
  const location = useLocation();
  useEffect(()=>{
    const t = document.querySelector('.topBars');
    if(location.pathname === '/Source'){
      t.style.display = 'none';
    }else{
      t.style.display = 'flex';
    }
  },[location]);

  return (
    <div className="App">
      <SideNav />
      <div className="Contents">
        <Suspense fallback={<div className="Loading">Now Loading...</div>}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/ForeCast" element={<ForeCast />} />
            <Route path="/RainSnow" element={<RainSnow />} />
            <Route path="/Clouds" element={<Clouds />} />
            <Route path="/Source" element={<Source />} />
            {/* <Route path="/Wind" element={<Wind />} /> */}
          </Routes>
        </Suspense>
      </div>
      <div className='topBars'>
        <Clock />
        <SearchBar />
      </div>
    </div>
  );
}

export default App;
