import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { FaUser, FaHome, FaCreditCard, FaTicketAlt, FaBoxOpen, FaHeart, FaStar} from 'react-icons/fa';
import ProfileComponent from '../ProfileComponent/ProfileComponent';
import AddressComponent from '../AddressComponent/AddressComponent';
import PaymentComponent from '../PaymentComponent/PaymentComponent';
import CouponComponent from '../CouponComponent/CouponComponent';
import MyOrdersComponent from '../MyOrdersComponent/MyOrdersComponent';
import WatchlistComponent from '../WatchlistComponent/WatchlistComponent';
import Points from '../Points/Points';
import './Profile.css';
import './Transition.css';
import Header from "../Home/Header.js";
import Footer from "../Footer/Footer.js";

function Profile() {
  const [activeComponent, setActiveComponent] = useState('profile');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return <ProfileComponent />;
      case 'address':
        return <AddressComponent />;
      case 'payment':
        return <PaymentComponent />;
      case 'coupon':
        return <CouponComponent />;
      case 'orders':
        return <MyOrdersComponent />;
      case 'watchlist':
        return <WatchlistComponent />;
      case 'points':
        return <Points />;
      default:
        return <ProfileComponent />;
    }
  };

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };
  
  
  return (
    <>
      <Header />
      <Container className="mt-5 mb-5">
        <Row>
          <Col lg="3" md="4" sm="12" className="d-lg-block d-md-block">
            <Nav className={`flex-column p-3 sidebar ${sidebarCollapsed ? 'collapsed' : ''}`} style={{ height: '100vh' }}>
              <h5 className={`sidebar-title ${sidebarCollapsed ? 'd-none' : ''}`}>My Account</h5>
              <Nav.Link as={Link} to="#profile" className={`navlink ${activeComponent === 'profile' ? 'active' : ''}`} onClick={() => handleNavClick('profile')}>
                <div className="d-flex align-items-center">
                  <FaUser className="me-2 nav-icon" /> <span className="nav-text">Profile</span>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="#address" className={`navlink ${activeComponent === 'address' ? 'active' : ''}`} onClick={() => handleNavClick('address')}>
                <div className="d-flex align-items-center">
                  <FaHome className="me-2 nav-icon" /> <span className="nav-text">Address</span>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="#payment" className={`navlink ${activeComponent === 'payment' ? 'active' : ''}`} onClick={() => handleNavClick('payment')}>
                <div className="d-flex align-items-center">
                  <FaCreditCard className="me-2 nav-icon" /> <span className="nav-text">Payment</span>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="#coupon" className={`navlink ${activeComponent === 'coupon' ? 'active' : ''}`} onClick={() => handleNavClick('coupon')}>
                <div className="d-flex align-items-center">
                  <FaTicketAlt className="me-2 nav-icon" /> <span className="nav-text">Coupon</span>
                </div>
              </Nav.Link>
              <h5 className={`sidebar-title mt-4 ${sidebarCollapsed ? 'd-none' : ''}`}>My Orders</h5>
              <Nav.Link as={Link} to="#orders" className={`navlink ${activeComponent === 'orders' ? 'active' : ''}`} onClick={() => handleNavClick('orders')}>
                <div className="d-flex align-items-center">
                  <FaBoxOpen className="me-2 nav-icon" /> <span className="nav-text">Orders</span>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="#watchlist" className={`navlink ${activeComponent === 'watchlist' ? 'active' : ''}`} onClick={() => handleNavClick('watchlist')}>
                <div className="d-flex align-items-center">
                  <FaHeart className="me-2 nav-icon" /> <span className="nav-text">Watchlist</span>
                </div>
              </Nav.Link>
              <Nav.Link as={Link} to="#points" className={`navlink ${activeComponent === 'points' ? 'active' : ''}`} onClick={() => handleNavClick('points')}>
                <div className="d-flex align-items-center">
                  <FaStar className="me-2 nav-icon" /> <span className="nav-text">Points</span>
                </div>
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg="9" md="8" sm="12" className="mt-4">
            <CSSTransition in={true} appear={true} timeout={500} classNames="fade" key={activeComponent}>
              {renderComponent()}
            </CSSTransition>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
    
  )
}

export default Profile