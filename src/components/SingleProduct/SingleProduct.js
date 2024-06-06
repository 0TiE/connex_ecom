import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import './SingleProduct.css';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function SingleProduct() {
  return (
    
    <Container className='mt-5'>
        <Breadcrumb className='mb-5'>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>

       <Row className='d-flex justify-content-center align-items-center'>
            <Col>
                <Col lg="7" className="mb-3">
                <iframe className='rounded' width="560" height="315" src="https://www.youtube.com/embed/FCe1vPuB954?si=jymXBiNeo0O8Sv4h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Col>
            </Col>
            <Col>
                <Col lg="8" className="mb-3">
                    <h3 className='productheading'>Cisco SG110 8 Port Gigabite Ethernet Switch</h3>
                    <h3 className='productheading'>SG110D-08-UK</h3>
                </Col>
                <Col lg="8" className="mt-4">
                    <p className='productprice'>US $35.99</p>
                </Col>
                <Row>
                    <Col>
                        <Row>
                            <Col lg="5">
                                <p className='productQuantity'>Quantity:</p>
                            </Col>
                            <Col lg="2" className='quantitybox'>
                                
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <p className='availablesold mt-1'>28 available / 18 sold</p>
                    </Col>
                </Row>
                <Col>
                    <div className="mb-2">
                        <Button className="buynowbtn" variant="primary" size="lg">
                        Buy Now 
                        </Button>{' '}
                    </div>
                </Col>
                <Col>
                    <div className="mb-2">
                        <Button className="addtocartbtn" variant="primary" size="lg">
                        Add to Cart 
                        </Button>{' '}
                    </div>
                </Col>
            </Col>
      </Row>
       
      <Row>
        <Col>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Specification</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
      </Row>
    </Container> 
  )
}

export default SingleProduct