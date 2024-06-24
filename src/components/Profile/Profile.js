import React, { useState , useMemo} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
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
        <Col Col lg="3" md="4">
          <Nav className="flex-column p-3" style={{ height: '110vh' }}>
            <h5>My Account</h5>
            <Nav.Link as={Link} to="#profile" className={`navlink ${activeComponent === 'profile' ? 'active' : ''}`} 
            onClick={() => handleNavClick('profile')}>Profile</Nav.Link>
            <Nav.Link as={Link} to="#address" className={`navlink ${activeComponent === 'address' ? 'active' : ''}`} 
            onClick={() => handleNavClick('address')}>Address</Nav.Link>
            <Nav.Link as={Link} to="#payment" className={`navlink ${activeComponent === 'payment' ? 'active' : ''}`} 
              onClick={() => handleNavClick('payment')}>Payment</Nav.Link>
            <Nav.Link as={Link} to="#coupon" className={`navlink ${activeComponent === 'coupon' ? 'active' : ''}`} 
              onClick={() => handleNavClick('coupon')}>Coupon</Nav.Link>
            <Nav.Link as={Link} to="#user" className={`navlink ${activeComponent === 'user' ? 'active' : ''}`} 
              onClick={() => handleNavClick('user')}>User</Nav.Link>
            <h5 className="mt-4">My Orders</h5>
            <Nav.Link as={Link} to="#orders" className={`navlink ${activeComponent === 'orders' ? 'active' : ''}`} 
              onClick={() => handleNavClick('orders')}>Orders</Nav.Link>
            <Nav.Link as={Link} to="#watchlist" className={`navlink ${activeComponent === 'watchlist' ? 'active' : ''}`} 
              onClick={() => handleNavClick('watchlist')}>Watchlist</Nav.Link>
            <Nav.Link as={Link} to="#points" className={`navlink ${activeComponent === 'points' ? 'active' : ''}`} 
              onClick={() => handleNavClick('points')}>Points</Nav.Link>
          </Nav>
        </Col>
        <Col lg="9" xs="12" md="8" className="mt-4">
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames="fade"
            key={activeComponent}
          >
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