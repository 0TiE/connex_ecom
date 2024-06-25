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
  Dropdown,
  Badge,
} from "react-bootstrap";

import image2 from "../../images/connex360.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure bootstrap-icons are imported
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
                  <Nav.Link href="../ProductFilter" className="d-none d-lg-block ms">Advance </Nav.Link>
                </Form>
              </Nav>
              <Nav className="justify-content-end flex-grow-1 pe-5">
              <Dropdown align="end" className="text-decoration-none no-caret">
      <Dropdown.Toggle variant="link" id="dropdown-profile" className="nav-link">
        <i className="bi bi-person h4"></i>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="../profile">Profile</Dropdown.Item>
        <Dropdown.Item href="../settings">Settings</Dropdown.Item>
        <Dropdown.Item href="../logout">Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

                <Nav.Link href="../Cart">
                  <i className="bi bi-cart3 h4"></i>
                  <Badge pill bg="primary" className="badge-notification">1</Badge>
                </Nav.Link>

                <Nav.Link href="../Watchlist">
                  <i className="bi bi-heart h4"></i>
                  <Badge pill bg="danger" className="badge-notification">1</Badge>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
