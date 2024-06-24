import React from 'react'
import { Card, Button, Container, Row, Col, Form, InputGroup} from 'react-bootstrap';
import image from '../../images/WhatsApp-Image-2023-01-04-at-12.26.18-removebg-preview.png';
import './PaymentComponent.css';

function PaymentComponent() {
  return (
    <Container>
        <Row>
            <h3>Payment</h3>
            <Card className="mb-3 mt-4" style={{ backgroundColor: '#D9D9D9' }}>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col lg="6">
                                <input type="text" className="form-control mb-4 mt-5" placeholder="Your Payment Option" disabled/>
                            </Col>  
                        </Row>
                        <Row className='mt-4'>
                            <Col lg="3" className="paymentbtn">
                                <Button variant="primary" className='btnpayment'>
                                    <i class="bi bi-cash" style={{ marginRight: '5px' }}></i> COD
                                </Button>
                            </Col>
                            <Col lg="3" className="paymentbtn">
                                <Button variant="primary" className='btnpayment'>
                                    <i class="bi bi-credit-card" style={{ marginRight: '5px' }}></i> Credit
                                </Button>
                            </Col>
                            <Col lg="3" className="paymentbtn">
                                <Button variant="primary" className='btnpayment'>
                                    <i class="bi bi-cash-coin" style={{ marginRight: '5px' }}></i> Cash
                                </Button>
                            </Col>
                            <Col lg="3" className="paymentbtn">
                                <Button variant="primary" className='btnpayment'>
                                    <i class="bi bi-three-dots" style={{ marginRight: '5px' }}></i> Points
                                </Button>
                            </Col>
                        </Row>
                    </Card.Text>
                    <Button variant="primary" className='mt-5'>Edit</Button>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
}

export default PaymentComponent