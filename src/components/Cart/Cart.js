import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import cartimg from '../../images/slider.jpg';
import './Cart.css';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import {Card,Image} from "react-bootstrap/";


function Cart() {
  return (

    <>
    <Container>
        <Row>
          <Col className='mt-5 mb-5'>
            <h3>Shopping Cart</h3>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col lg='7'>
            <Row className='mb-4'>
              <Col xs='12' md='6'>
                <Image className='cartimg rounded' src={cartimg} fluid />
              </Col>
              <Col xs='12' md='6'>
                <div className="content">
                  <h5 className='productheading'>Cisco SG110 8 Port Gigabite Ethernet Switch</h5>
                  <h5 className='productheading'>SG110D-08-UK</h5>
                </div>
                <Row>
                  <Col xs="12" md="5">
                    <p className='productprice'>US $35.99</p>
                  </Col>
                  <Col xs="12" md="7">
                    <Row>
                      <Col xs="6" md="5">
                        <p className='productQuantity'>Quantity:</p>
                      </Col>
                      <Col xs="6" md="7">
                        <Form.Group controlId="formGridquantitybox" className='quantitybox' type="number">
                          <Form.Control />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className='mt-3'>
                  <p className='remove'>Remove</p>
                </div>
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col xs='12' md='6'>
                <Image className='cartimg rounded' src={cartimg} fluid />
              </Col>
              <Col xs='12' md='6'>
                <div className="content">
                  <h5 className='productheading'>Cisco SG110 8 Port Gigabite Ethernet Switch</h5>
                  <h5 className='productheading'>SG110D-08-UK</h5>
                </div>
                <Row>
                  <Col xs="12" md="5">
                    <p className='productprice'>US $35.99</p>
                  </Col>
                  <Col xs="12" md="7">
                    <Row>
                      <Col xs="6" md="5">
                        <p className='productQuantity'>Quantity:</p>
                      </Col>
                      <Col xs="6" md="7">
                        <Form.Group controlId="formGridquantitybox" className='quantitybox' type="number">
                          <Form.Control />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className='mt-3'>
                  <p className='remove'>Remove</p>
                </div>
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col xs='12' md='6'>
                <Image className='cartimg rounded' src={cartimg} fluid />
              </Col>
              <Col xs='12' md='6'>
                <div className="content">
                  <h5 className='productheading'>Cisco SG110 8 Port Gigabite Ethernet Switch</h5>
                  <h5 className='productheading'>SG110D-08-UK</h5>
                </div>
                <Row>
                  <Col xs="12" md="5">
                    <p className='productprice'>US $35.99</p>
                  </Col>
                  <Col xs="12" md="7">
                    <Row>
                      <Col xs="6" md="5">
                        <p className='productQuantity'>Quantity:</p>
                      </Col>
                      <Col xs="6" md="7">
                        <Form.Group controlId="formGridquantitybox" className='quantitybox' type="number">
                          <Form.Control />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div className='mt-3'>
                  <p className='remove'>Remove</p>
                </div>
              </Col>
            </Row>
          </Col>
          <Col lg='5'>
            <Card className="p-4 vh-100" style={{ backgroundColor: '#D9D9D9' }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <div className="d-flex justify-content-between mt-3">
                  <Card.Text>Item (3)</Card.Text>
                  <Card.Text>US $49.99</Card.Text>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <Card.Text>Vat 12%</Card.Text>
                  <Card.Text>US $9.99</Card.Text>
                </div>
                <div className="d-flex justify-content-between">
                  <Card.Text>SSCL 2.5%</Card.Text>
                  <Card.Text>US $9.99</Card.Text>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Subtotal</h5>
                  <h5>US $423.23</h5>
                </div>
                <Button className="w-100 mt-3" variant="primary">Checkout</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        <Row className='mt-3'>
          <Col>
            <h3>Related Items</h3>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Cart