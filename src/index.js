import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';


import App from './App';
import './index.css';


const container = document.getElementById('root');
const root = createRoot(container);


// 접속시 시간 따라 배경 바꾸기
const Public = process.env.PUBLIC_URL;
const date = new Date();
const hour = date.getHours();
const html = document.querySelector("html");
if( hour >= 20 && hour <=24 ){
  html.style.backgroundImage = `url(${Public}/images/backgrounds/nightTime.jpg)`;
}else if( 0 <= hour && hour <= 6 ){
  html.style.backgroundImage = `url(${Public}/images/backgrounds/nightTime.jpg)`;
}else if( 6 < hour && hour <= 10 ){
  html.style.backgroundImage = `url(${Public}/images/backgrounds/morningTime.jpg)`;
}else if( 10 < hour && hour <= 18 ){
  html.style.backgroundImage = `url(${Public}/images/backgrounds/dayTime.jpg)`;
}else if( 18 < hour && hour < 20 ){
  html.style.backgroundImage = `url(${Public}/images/backgrounds/eveningTime.jpg)`;
}

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
