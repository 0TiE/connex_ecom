import React from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "./OrderTrack.css";
import OrderTrackProgressBar from "../../components/OrderTrackProgressBar/OrderTrackProgressBar";
import Header from "../Home/Header";
import Footer from "../Footer/Footer";

function OrderTrack() {
  return (
    <>
      {" "}
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col>
            <h3>Order Tracking</h3>
          </Col>
        </Row>
        <Row className="my-4 card-centered mb-5">
          <Col xs={12} md={8} lg={6}>
            <Card>
              <Card.Body className="cardbody">
                <Card.Title className="cardtitle">
                  Your item is on its way
                </Card.Title>
                <Card.Text className="cardtext">
                  It looks like the item is on its way and should arrive by
                  April 23, 2024. If you don't receive it by then, please{" "}
                  <span className="contactus">contact us</span> we can help you.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <OrderTrackProgressBar />

        <Row className="my-4">
          <Col xs={12} md={12} lg={12}>
            <Card>
              <Card.Header className="mainheading">
                <b>Tracking Details</b>
              </Card.Header>
              <p className="trackingno mt-4">
                Tracking No: <span>TRC684542</span>
              </p>
              <Card.Body>
                <Table className="no-vertical-borders">
                  <tbody>
                    <tr>
                      <td>
                        Apr 21, 2024
                        <br />
                        <small>09:41 AM</small>
                      </td>
                      <td>Payment accepted</td>
                    </tr>

                    <tr>
                      <td>
                        Apr 21, 2024
                        <br />
                        <small>09:41 AM</small>
                      </td>
                      <td>Item processed to deliver</td>
                    </tr>
                    <tr>
                      <td>
                        Apr 21, 2024
                        <br />
                        <small>09:41 AM</small>
                      </td>
                      <td>Tracking number provided</td>
                    </tr>
                    <tr>
                      <td>
                        Apr 21, 2024
                        <br />
                        <small>09:41 AM</small>
                      </td>
                      <td>Out for delivery</td>
                    </tr>
                    <tr>
                      <td>
                        Apr 21, 2024
                        <br />
                        <small>09:41 AM</small>
                      </td>
                      <td>Delivered</td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default OrderTrack;
