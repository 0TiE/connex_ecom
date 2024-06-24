import React from 'react'
import { Card, Button, Container, Row, Col} from 'react-bootstrap';
import image from '../../images/WhatsApp-Image-2023-01-04-at-12.26.18-removebg-preview.png';
import './ProfileComponent.css';

function ProfileComponent() {
  return (
    <Container>
        <Row>
            <h3>Profile</h3>
            <Card className="mb-3 mt-4" style={{ backgroundColor: '#D9D9D9' }}>
                <Card.Body>
                    <Card.Text>
                        <Row>
                            <Col lg={{ order: 1, span: 6}} md={{ order: 2, span: 12}} sm={{ order: 2, span: 12}} xs={{ order: 2, span: 12}} >
                                <input type="text" className="form-control mb-4 mt-5" placeholder="Company Name" disabled/>
                            </Col>             
                            <Col lg={{ order: 2 }} md={{ order: 1 }} sm={{ order: 1 }} xs={{ order: 1 }} className='text-end'>
                                <img src={image} className="company-logo"/>
                            </Col>
                        </Row>
                        <input type="text" className="form-control mb-2" placeholder="Username" />
                        <input type="text" className="form-control mb-2" placeholder="Password" />
                    </Card.Text>
                    <Button variant="primary">Edit</Button>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
    
}

export default ProfileComponent