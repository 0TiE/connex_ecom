import React, { useRef, useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import image from '../../images/WhatsApp-Image-2023-01-04-at-12.26.18-removebg-preview.png';
import './ProfileComponent.css';

function ProfileComponent() {

    const nodeRef = useRef(null); 
  const [inProp, setInProp] = useState(false);

  return (
    <Container>
      <Row>
        <h3>Profile</h3>
        <Card className="mb-3 mt-4" style={{ backgroundColor: '#D9D9D9' }}>
          <Card.Body>
            <div> {/* Changed from Card.Text to div */}
              <Row>
                <Col
                  lg={{ order: 1, span: 6 }}
                  md={{ order: 2, span: 12 }}
                  sm={{ order: 2, span: 12 }}
                  xs={{ order: 2, span: 12 }}
                >
                  <input
                    type="text"
                    className="form-control mb-4 mt-5"
                    placeholder="Company Name"
                    disabled
                  />
                </Col>
                <Col
                  lg={{ order: 2 }}
                  md={{ order: 1 }}
                  sm={{ order: 1 }}
                  xs={{ order: 1 }}
                  className="text-end"
                >
                  <img src={image} className="company-logo" />
                </Col>
              </Row>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Username"
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Password"
              />
            </div>
            <Button variant="primary" onClick={() => setInProp(!inProp)}>Edit</Button>
            <CSSTransition
              in={inProp}
              timeout={300}
              classNames="alert"
              unmountOnExit
              nodeRef={nodeRef} // Pass the ref to CSSTransition
            >
              <div ref={nodeRef}>
                {/* Content to animate */}
              </div>
            </CSSTransition>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  )
    
}

export default ProfileComponent