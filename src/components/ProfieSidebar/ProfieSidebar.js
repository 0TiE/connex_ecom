import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import './ProfieSidebar.css';

import ProfileComponent from '../ProfileComponent/ProfileComponent';
import AddressComponent from '../AddressComponent/AddressComponent';
import PaymentComponent from '../PaymentComponent/PaymentComponent';
import CouponComponent from '../CouponComponent/CouponComponent';
import MyOrdersComponent from '../MyOrdersComponent/MyOrdersComponent';
import WatchlistComponent from '../WatchlistComponent/WatchlistComponent';
import Points from '../Points/Points';

import Header from "../Home/Header.js";
import Footer from "../Footer/Footer.js";

function ProfieSidebar() {
    const navigate = useNavigate();

  return (
    <>
    <Header />
                <div className="app-container">
                <SideNav onSelect={(selected) => { navigate(`/${selected}`); }} className="sidenav">
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="profile">
                        <NavItem eventKey="profile1">
                            <NavIcon><i className='fa-solid fa-user navicon'></i></NavIcon>
                            <NavText>Profile</NavText>
                        </NavItem>
                        <NavItem eventKey="address1">
                            <NavIcon><i className='fa-solid fa-house navicon'></i></NavIcon>
                            <NavText>Address</NavText>
                        </NavItem>
                        <NavItem eventKey="payment1">
                            <NavIcon><i className="fa-solid fa-credit-card navicon"></i></NavIcon>
                            <NavText>Payment</NavText>
                        </NavItem>
                        <NavItem eventKey="coupon1">
                            <NavIcon><i className="fa-solid fa-ticket navicon"></i></NavIcon>
                            <NavText>Coupon</NavText>
                        </NavItem>
                        <NavItem eventKey="orders1">
                            <NavIcon><i className="fa-solid fa-store navicon"></i></NavIcon>
                            <NavText>Orders</NavText>
                        </NavItem>
                        <NavItem eventKey="watchlist1">
                            <NavIcon><i className="fa-solid fa-heart navicon"></i></NavIcon>
                            <NavText>Watchlist</NavText>
                        </NavItem>
                        <NavItem eventKey="points1">
                            <NavIcon><i className="fa-solid fa-star navicon"></i></NavIcon>
                            <NavText>Points</NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <main className="main-content">
                    <Routes>
                        <Route path="/profile1" element={<ProfileComponent />} />
                        <Route path="/address1" element={<AddressComponent />} />
                        <Route path="/payment1" element={<PaymentComponent />} />
                        <Route path="/coupon1" element={<CouponComponent />} />
                        <Route path="/orders1" element={<MyOrdersComponent />} />
                        <Route path="/watchlist1" element={<WatchlistComponent />} />
                        <Route path="/points1" element={<Points />} />
                    </Routes>
                </main>
                </div>
    </>
  )
  

}

export default ProfieSidebar;