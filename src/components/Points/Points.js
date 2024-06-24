import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Points.css';

function Points() {
  return (
    <Container>
        <Row>
            <h3>Points</h3>
            <Card className="mb-3 mt-4 py-3 px-3" style={{ backgroundColor: '#D9D9D9' }}>
                <Card.Body style={{ backgroundColor: '#fff' }}>
                    <Card.Text>
                        <Row>
                            <Col>
                                <Row className="mb-4">
                                    <Col>
                                        <h5>My Points</h5>
                                        <h1>0</h1>
                                    </Col>
                                </Row>
                                <hr></hr>
                                <Row className="mb-4">
                                    <Col>
                                        <Row className="mb-2">
                                            <Col> <span className="dot dot-topup"></span>Top-up</Col>
                                        </Row>
                                        <Row>
                                            <Col>0</Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row className="mb-2">
                                            <Col> <span className="dot dot-refunds"></span> Refunds</Col>
                                        </Row>
                                        <Row>
                                            <Col>0</Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row className="mb-2">
                                            <Col> <span className="dot dot-rewards"></span> Rewards</Col>
                                        </Row>
                                        <Row>
                                            <Col>0</Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Button variant="primary"><b>Redeem</b></Button>
                            </Col>
                            <Col className='mt-5'>
                                <Card className="circle">
                                    <Card.Body className="circle-body">
                                    <Card className="inner-circle"></Card>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
}

export default Points