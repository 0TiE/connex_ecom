import React from 'react'
import {Card, InputGroup} from "react-bootstrap/";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import './Checkout.css';
import Header from "../Home/Header.js";
import Footer from "../Footer/Footer.js";

function Checkout() {
  return (
    <>

    <Header />

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
                <Col lg="7" className="mt-2 mb-3">
                    <h5><b>Billing Details</b></h5>
                </Col>
                <Form>
                    <Form.Group className="mb-3" as={Col} controlId="formGridorganizationname">
                        <Form.Label>Organization Name</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridprimaryaddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridcity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" required />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridcountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Select defaultValue="Select country">
                            <option>Select country</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State/Province</Form.Label>
                        <Form.Select defaultValue="N/A">
                            <option>N/A</option>
                            <option>Eastern</option>
                            <option>North Central</option>
                            <option>Northern</option>
                            <option>North Western</option>
                            <option>Sabaragamuwa</option>
                            <option>Southern</option>
                            <option>Uva</option>
                            <option>Western</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip/Postal Code</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridphone">
                        <Form.Label>Company Phone</Form.Label>
                        <Form.Control type="text" required maxLength="10"/>
                        </Form.Group>
                    </Row>
                </Form>
            </Row>
            <Row>
                <Col lg="7" className="mt-2 mb-3">
                    <h5><b>Ship To a Different Address</b></h5>
                </Col>
                <Form>
                    <Form.Group className="mb-3" as={Col} controlId="formGridorganizationname">
                        <Form.Label>Organization Name</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridprimaryaddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridcity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" required />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridcountry">
                        <Form.Label>Country</Form.Label>
                        <Form.Select defaultValue="Select country">
                            <option>Select country</option>
                            <option>...</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State/Province</Form.Label>
                        <Form.Select defaultValue="N/A">
                            <option>N/A</option>
                            <option>Eastern</option>
                            <option>North Central</option>
                            <option>Northern</option>
                            <option>North Western</option>
                            <option>Sabaragamuwa</option>
                            <option>Southern</option>
                            <option>Uva</option>
                            <option>Western</option>
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip/Postal Code</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridphone">
                        <Form.Label>Company Phone</Form.Label>
                        <Form.Control type="text" required maxLength="10"/>
                        </Form.Group>
                    </Row>

                    <Row className="my-3">
                    <Col className="d-flex justify-content-start">
                        <Button variant="info" className="text-white" size="lg">
                        Submit
                        </Button>
                    </Col>
                </Row>
                </Form>
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
      
    <Footer />
    </>
  )
}

export default Checkout