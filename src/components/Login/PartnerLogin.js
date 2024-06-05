import React from "react";
import { Button, Container, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import image from "../../images/Login.gif";
import image2 from "../../images/connex360.png";
import { useNavigate } from 'react-router-dom';


function PartnerLogin() {
  const navigate=useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container className="justify-content-center">
          <Row>
            <Col lg="6">
              <Col lg="5" className="mt-3">
                <Image src={image2} fluid />
              </Col>
              <Col lg="5" className="mt-2">
                <h3>Partner Login</h3>
              </Col>
              <Form ac="true">
                <Form.Group
                  className="mb-3 mt-3"
                  controlId="formPlaintextEmail"
                >
                  <Form.Label>User Name</Form.Label>
                  <Col>
                    <Form.Control type="name" placeholder="User Name" />
                  </Col>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                  <Form.Label>Password</Form.Label>
                  <Col>
                    <Form.Control type="password" placeholder="Password" />
                  </Col>
                </Form.Group>
              </Form>
              <Form.Group className="mb-3 d-flex justify-content-between">
                <a className="mt-5" href="#Forgot">
                  Forgot Password
                </a>
                <a className="mt-5" href="" style={{ textDecoration: 'none', color: 'black'}}>
                  Don't have an account? Please <span className="Register" style={{ color: '#0d6efd'}} onClick={()=>navigate('./Signupform')}>Register</span>
                </a>
                
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check
                  name="terms"
                  label="Remember Me"
                  id="validationFormik0"
                />
              </Form.Group>

              <Button variant="info" className="text-white" size="lg"  onClick={()=>navigate('./Home')}>
                Sign In
              </Button>
            </Col>
            <Col lg="6" className="d-none d-lg-block">
              <Image src={image} rounded fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default PartnerLogin;
