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

import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Footer from './components/Footer/Footer';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import OrderTrack from './components/OrderTrack/OrderTrack';
import ProductFilter from './components/ProductFilter/ProductFilter';
import Watchlist from './components/Watchlist/Watchlist';
import Profile from './components/Profile/Profile';
import ProfileComponent from './components/ProfileComponent/ProfileComponent'

import ProfieSidebar from './components/ProfieSidebar/ProfieSidebar'

import PromoCarousel from './components/Home/Carousel/PromoCarousel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/UserLogin' element={<UserLoginPage />} />
      <Route path='/AdminLogin' element={<AdminLoginPage />} />
      <Route path='/PartnerLogin' element={<PartnerLoginPage />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/PromoCarousel' element={<PromoCarousel />} />
      <Route path='/Register' element={<Register />} />
      <Route path='/Footer' element={<Footer />} />
      <Route path='/SingleProduct' element={<SingleProduct />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/Checkout' element={<Checkout />} />
      <Route path='/OrderTrack' element={<OrderTrack />} />
      <Route path='/ProductFilter' element={<ProductFilter />} />
      <Route path='/Watchlist' element={<Watchlist />} />
      <Route path='/Profile' element={<Profile />} />
      <Route path='/ProfileComponent' element={<ProfileComponent />}/>
      <Route path='/ProductFilter' element={<ProductFilter />}/>
      <Route path='/ProfieSidebar' element={<ProfieSidebar />}/>

    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
