import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Navbar,
  Nav,
  Offcanvas,
  FormControl,
  Row,
} from "react-bootstrap";

import image2 from "../../images/connex360.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  return (
    <>
      <Container className="mt-3 border-bottom ">
        <Row className="d-flex justify-content-between">
          <Col>
            <h6 className="text">Hello Partner !</h6>
          </Col>
          <Col className="d-flex justify-content-end">
            <h6 className="mr-3 text">Daily Deals</h6>
            <h6 className="helptext text-success">Help & Support</h6>
          </Col>
        </Row>
      </Container>

      <Navbar expand="lg" className="mb-5 ">
        <Container fluid>
          <Navbar.Brand href="../home" className="ps-3">
            <img src={image2} alt="logo" className="logo w-50" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Form className="d-flex w-100">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary">
                    Search
                  </Button>
                  <Nav.Link href="#" className="d-none d-lg-block ms">Advance </Nav.Link>
                </Form>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-5">
                <Nav.Link href="#"><i className="bi bi-person h4"></i></Nav.Link>
                <Nav.Link href="#"><i className="bi bi-cart3 h4"></i><span className="badge rounded-pill badge-notification bg-primary">1</span> </Nav.Link>
                <Nav.Link href="#"><i className="bi bi-heart h4"></i><span className="badge rounded-pill badge-notification bg-danger">1</span> </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      
    </>
  );
}

export default Header;
