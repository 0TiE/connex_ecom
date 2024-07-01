import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

function ProfieSidebar() {
  return <SideNav 
    onSelect={selected=> {
    console.log(selected)
  }}>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <h3>My Account</h3>
        <NavItem>
            <NavIcon><i className='fa-solid fa-house'></i></NavIcon>
            <NavText>Profile</NavText>
        </NavItem>
        <NavItem>
            <NavIcon><i className='fa-solid fa-house'></i></NavIcon>
            <NavText>Address</NavText>
        </NavItem>
        <NavItem>
            <NavIcon><i className='fa-solid fa-house'></i></NavIcon>
            <NavText>Payment</NavText>
        </NavItem>
        <NavItem>
            <NavIcon><i className='fa-solid fa-house'></i></NavIcon>
            <NavText>Coupon</NavText>
        </NavItem>
        <NavItem>
            <NavIcon><i className='fa-solid fa-house'></i></NavIcon>
            <NavText>Orders</NavText>
        </NavItem>
        <NavItem>
            <NavIcon><i className='fa-solid fa-house'></i></NavIcon>
            <NavText>Watchlist</NavText>
        </NavItem>
        <NavItem>
            <NavIcon><i className='fa-solid fa-house'></i></NavIcon>
            <NavText>Points</NavText>
        </NavItem>
        
    </SideNav.Nav>
  </SideNav>

}

export default ProfieSidebar;