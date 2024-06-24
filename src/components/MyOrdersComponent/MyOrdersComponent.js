import React from 'react'
import { Card, Button, Container, Row, Col, Table} from 'react-bootstrap';
import './MyOrdersComponent.css';

function MyOrdersComponent() {
  return (
    <Container>
        <Row>
            <h3>Orders</h3>
            <Card className="mb-3 mt-4" style={{ backgroundColor: '#D9D9D9' }}>
                <Card.Body>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>Orders</th>
                            <th>Placed On</th>
                            <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>#01</td>
                            <td>17/05/2024</td>
                            <td>Delivered</td>
                            </tr>
                            <tr>
                            <td>#02</td>
                            <td>17/05/2024</td>
                            <td>Processing</td>
                            </tr>
                            <tr>
                            <td>#03</td>
                            <td>17/05/2024</td>
                            <td>Cancel</td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
}

export default MyOrdersComponent