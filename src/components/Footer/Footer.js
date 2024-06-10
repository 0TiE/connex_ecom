import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {

    const linkStyle = {
        textDecoration: 'none',
        color: '#02A1E6',
      };

  return (
    <Container>
      <Row className="justify-content-center d-flex ">
        <Col xs={12} md={6} lg={3}>
            <ListGroup className="no-border" variant="flush">
                <ListGroup.Item><a href="#" style={linkStyle}><b className='listheading'>Buy</b></a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}>Products</a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}>Registration</a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}>Promo</a></ListGroup.Item>
            </ListGroup>
        </Col>
        <Col xs={12} md={6} lg={3}>
            <ListGroup className="no-border" variant="flush">
                <ListGroup.Item><a href="#" style={linkStyle}><b className='listheading'>About</b></a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}>About Us</a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}>International</a></ListGroup.Item>
                
            </ListGroup>
        </Col>
        <Col xs={12} md={6} lg={3}>
            <ListGroup className="no-border" variant="flush">
                <ListGroup.Item><a href="#" style={linkStyle}><b className='listheading'>Stay Connected</b></a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}>Blog</a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}><FaFacebookSquare style={{ marginRight: '8px' }} /> Facebook</a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}><FaInstagram style={{ marginRight: '8px' }} /> Instagram</a></ListGroup.Item>
            </ListGroup>
        </Col>
        <Col xs={12} md={6} lg={3}>
            <ListGroup className="no-border" variant="flush">
                <ListGroup.Item><a href="#" style={linkStyle}><b className='listheading'>Help & Contact</b></a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}>Help & Support</a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}>Contact</a></ListGroup.Item>
                <ListGroup.Item><a href="#" style={linkStyle}>Returns & Refunds</a></ListGroup.Item>
            </ListGroup>
        </Col>
        
      </Row>

      <Row className="justify-content-center mt-5 mb-5">
            <Col xs="auto">
                <p className="copyright-text" style={linkStyle}>&copy; 2024 <a href='#'>Connex</a>. All rights reserved.</p>
            </Col>
      </Row>
    </Container>
  )
}

export default Footer