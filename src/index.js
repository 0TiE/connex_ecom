import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLoginPage from './pages/UserLoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import PartnerLoginPage from './pages/PartnerLoginPage';


import Home1 from './components/Home/Home';
import PromoCarousel from './components/Home/Carousel/PromoCarousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/UserLogin' element={<UserLoginPage />} />
      <Route path='/AdminLogin' element={<AdminLoginPage />} />
      <Route path='/PartnerLogin' element={<PartnerLoginPage />} />
      <Route path='/Home' element={<Home1 />} />
      <Route path='/PromoCarousel' element={<PromoCarousel />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
