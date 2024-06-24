import React from 'react'
import { Card, Button, Container, Row, Col, Form, InputGroup} from 'react-bootstrap';
import './AddressComponent.css';

function AddressComponent() {
  return (
    <Container>
        <Row>
            <h3>Address</h3>
            <Card className="mb-3 mt-4" style={{ backgroundColor: '#D9D9D9' }}>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col lg="6">
                                <input type="text" className="form-control mb-4 mt-5" placeholder="Your Address Book" disabled/>
                            </Col> 
                        </Row>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Shipping Address"
                            aria-label="Shipping Address"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2" disabled>
                             <i class="fas fa-map-marker-alt location-icon"></i>
                            </Button>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Form.Control
                            placeholder="Billing Address"
                            aria-label="Billing Address"
                            aria-describedby="basic-addon2"
                            />
                            <Button variant="outline-secondary" id="button-addon2" disabled>
                             <i class="fas fa-map-marker-alt location-icon"></i>
                            </Button>
                        </InputGroup>
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
}

export default AddressComponent