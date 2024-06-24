import React from 'react'
import { Card, Button, Container, Row, Col, Form, InputGroup} from 'react-bootstrap';
import './CouponComponent.css';

function CouponComponent() {
  return (
    <Container>
        <Row>
            <h3>Coupon</h3>
            <Card className="mb-3 mt-4" style={{ backgroundColor: '#D9D9D9' }}>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col lg="6">
                                <input type="text" className="form-control mb-4 mt-5" placeholder="Your Coupons" disabled/>
                            </Col> 
                        </Row>
                        <Row>
                            <Col lg="6">
                                <input type="text" className="form-control mb-2" placeholder="Coupon" />
                            </Col>
                            <Col lg="6">
                                <input type="text" className="form-control mb-2" placeholder="Coupon" />
                            </Col> 
                        </Row>
                        
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
}

export default CouponComponent