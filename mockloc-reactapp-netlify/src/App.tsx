import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import Deeplink from './pages/deeplink';
import AppAddTxt from './pages/app-add-txt/index';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/app-ads.txt' element={<AppAddTxt/>} />
        <Route path='/dl-stpoint' element={<Deeplink />} />
        <Route path='/dl-playlist-points' element={<Deeplink />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
