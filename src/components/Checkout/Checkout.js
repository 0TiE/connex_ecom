import React from 'react'
import {Card, InputGroup} from "react-bootstrap/";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import './Checkout.css';

function Checkout() {
  return (
    <>
    <Container>
        <Row>
          <Col className='mt-5 mb-5'>
            <h3>Checkout</h3>
          </Col>
        </Row>
        <Row className='mt-3'>
          <Col lg='7'>
            <Row className='mb-4'>
              <Col xs='12' md='6'>
                <h4><b>Pay With</b></h4>
                <Form className='mt-4'>
                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Credit / Debit Card`}
                            className="radiobtn"

                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`Bank Transfer`}
                            className="radiobtn"
                        />
                        <Form.Check 
                            type={type}
                            id={`default-${type}`}
                            label={`COD`}
                            className="radiobtn"
                        />
                        </div>
                    ))}
                </Form>
              </Col>
            </Row>
            <Row>
                <Col xs='12' md='6'>
                    <h6><b>Ship to Select a Shipping Address</b></h6>
                </Col>
            </Row>
            <Row>
                <Col xs='12' md='6' className='mt-5'>
                    <h5><b>Coupons</b></h5>
                    <InputGroup className="mb-3 mt-4">
                        <Form.Control
                            placeholder=""
                            aria-label="coupons"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="success" id="button-addon2">
                            Apply
                        </Button>
                    </InputGroup>
                </Col>
            </Row>
          </Col>
          <Col lg='5'>
            <Card className="p-4" style={{ backgroundColor: '#D9D9D9' }}>
              <Card.Body>
                <Card.Title></Card.Title>
                <div className="d-flex justify-content-between mt-3">
                  <Card.Text>Item (3)</Card.Text>
                  <Card.Text>US $ 49.99</Card.Text>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <Card.Text>Delivery Fee</Card.Text>
                  <Card.Text>US $ 8.99</Card.Text>
                </div>
                <div className="d-flex justify-content-between mt-3">
                  <Card.Text>Vat 12%</Card.Text>
                  <Card.Text>US $ 9.99</Card.Text>
                </div>
                <div className="d-flex justify-content-between">
                  <Card.Text>SSCL 2.5%</Card.Text>
                  <Card.Text>US $ 9.99</Card.Text>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <h5>Subtotal</h5>
                  <h5>US $423.23</h5>
                </div>
              </Card.Body>
            </Card>
            <Button className="w-100 mt-3" variant="primary">Confirm</Button>
          </Col>
        </Row>
        
      </Container>
    </>
  )
}

export default Checkout