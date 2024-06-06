import React, { useState } from 'react'
import { Button, Container, Image } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import image from "../../images/Login.gif";
import { useNavigate } from 'react-router-dom';



function Register() {
  const navigate=useNavigate();

  const [currentStep, setCurrentStep] = useState(1);

  const handleSignInClick = () => {
    navigate('/PartnerLogin');
  };

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackClick = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container className="justify-content-center">
          <Row>
          {currentStep === 1 && (<Col lg="6">
              <Col lg="7" className="mt-2 mb-3">
                <h3>Registration Information</h3>
              </Col>
              <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridfirstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridlastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridemail">
                    <Form.Label>Business Email</Form.Label>
                    <Form.Control type="email" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridphone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="text" required maxLength="10"/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridjobtitle">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Select defaultValue="Select...">
                        <option >Select...</option>
                        <option >IT Security</option>
                        <option >IT Administrator</option>
                        <option >IT Consultant</option>
                        <option >IT Manager</option>
                        <option >IT Director</option>
                        <option >C-Level Exec/VP</option>
                        <option >IT Other</option>
                        <option >Owner</option>
                        <option >Partner/Reseller</option>
                        <option >Non IT</option>
                        <option >Student</option>
                        <option >Home Use</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridjobfunction">
                    <Form.Label>Job Function</Form.Label>
                    <Form.Select defaultValue="Select...">
                        <option>Select...</option>
                        <option value="function1">Primary Contact</option>
                        <option value="function2">Owner/CEO</option>
                        <option value="function3">Marketing</option>
                        <option value="function4">Sales</option>
                        <option value="function5">Technical</option>
                        <option value="function6">Renewal</option>
                    </Form.Select>
                    </Form.Group>
                </Row>

                <Row className="my-3">
                    <Col className="d-flex justify-content-start">
                        <Button variant="info" className="text-white" size="lg" onClick={handleSignInClick}>
                        Sign In
                        </Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="info" className="text-white" size="lg" onClick={handleNextClick}>
                        Next
                        </Button>
                    </Col>
                </Row>
              </Form>
            </Col>)}

            {currentStep === 2 && (<Col lg="6">
              <Col lg="7" className="mt-2 mb-3">
                <h3>Company Information</h3>
              </Col>
              <Form>
                <Form.Group className="mb-3" as={Col} controlId="formGridorganizationname">
                    <Form.Label>Organization Name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridprimaryaddress">
                    <Form.Label>Primary Address</Form.Label>
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

                    <Form.Group as={Col} controlId="formGridwebsite">
                    <Form.Label>Website</Form.Label>
                    <Form.Control type="text" required />
                    </Form.Group>
                </Row>

                <Row className="my-3">
                    <Col className="d-flex justify-content-start">
                        <Button variant="info" className="text-white" size="lg" onClick={handleBackClick}>
                        Back
                        </Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="info" className="text-white" size="lg" onClick={handleNextClick}>
                        Next
                        </Button>
                    </Col>
                </Row>
              </Form>

              
            </Col>)}

            {currentStep === 3 && (<Col lg="6">
              <Col lg="8" className="mt-2 mb-3">
                <h3>Secondary Contact Deatils</h3>
              </Col>
              <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridfirstname">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridlastname">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" required />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridmobilephone">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="text" required maxLength="10"/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridlandphone">
                    <Form.Label>Land Number</Form.Label>
                    <Form.Control type="text" required maxLength="10"/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridemail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" required/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridlink">
                    <Form.Label>Website Link</Form.Label>
                    <Form.Control type="text" required/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridbrcnumber">
                    <Form.Label>BRC Number</Form.Label>
                    <Form.Control type="text" required/>
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formFile">
                    <Form.Label>BR Certificate</Form.Label>
                    <Form.Control type="file" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formvatcertificateFile">
                    <Form.Label>VAT Certificate</Form.Label>
                    <Form.Control type="file" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridbcompanybehaviour">
                    <Form.Label>Compny Behaviour</Form.Label>
                    <Form.Control type="text" required/>
                    </Form.Group>
                </Row>

                <Row className="my-3">
                    <Col className="d-flex justify-content-start">
                        <Button variant="info" className="text-white" size="lg" onClick={handleBackClick}>
                        Back
                        </Button>
                    </Col>
                    <Col className="d-flex justify-content-end">
                        <Button variant="info" className="text-white" size="lg" onClick={handleNextClick}>
                        Next
                        </Button>
                    </Col>
                </Row>
              </Form>

              
            </Col>)}



            <Col lg="6" className="d-none d-lg-block">
              <Image src={image} rounded fluid />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Register;
