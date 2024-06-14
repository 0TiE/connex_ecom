import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Navbar,
  Nav,
  FormControl,
  Row,
} from "react-bootstrap";
import React from "react";
import image2 from "../../images/connex360.png";
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

function Header() {
  const navigate=useNavigate();
  return (
    <>

      <Container className="mt-3">
        <Row className="d-flex justify-content-between border-bottom">
          <Col>
            <h6 className="text">Hello Partner !</h6>
          </Col>
          <Col className="d-flex justify-content-end">
            <h6 className="mr-3 text">Daily Deals</h6>
            <h6 className=" text-success">Help & Support</h6>
          </Col>
        </Row>
       
      </Container>
    <Navbar expand="lg mb-5">
        <Container>
          <Navbar.Brand href="#home"><img src={image2} alt="logo" className="w-50 "/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
            <Nav className="mx-auto">
              <Form className="d-flex w-100">
                <div>
                <InputGroup>
                  <div className="dropdownbtn">
                  <DropdownButton
                    as={InputGroup.Prepend}
                    variant="outline-secondary"
                    title="Categories"
                    id="input-group-dropdown-1"
                  >
                    <Dropdown.Item href="#">Category 1</Dropdown.Item>
                    <Dropdown.Item href="#">Category 2</Dropdown.Item>
                    <Dropdown.Item href="#">Category 3</Dropdown.Item>
                  </DropdownButton>
                  </div>
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="primary">
                    <FaSearch />
                  </Button>
                </InputGroup>
                </div>
              </Form>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#"><i className="bi bi-person h4"></i> </Nav.Link>
              <Nav.Link href="#"><i className="bi bi-cart3 h4"></i></Nav.Link>
              <Nav.Link href="#"><i className="bi bi-heart h4"></i></Nav.Link>
            </Nav> 
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
