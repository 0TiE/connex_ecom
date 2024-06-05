import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import React from "react";
import image2 from "../../images/connex360.png";

function Header() {
  return (
    <>
      <Container className="">
        <Row className=" border-black border-bottom ">
          <Col className="text-end">Hello Partner !</Col>
          
          <Col className="text-end ">Daily Deals</Col>
          <Col className="text-success">Help & Support</Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col lg="2">
            <Image src={image2} fluid />
          </Col>

          <Col lg="7">
            <InputGroup>
              <Form.Control aria-label=" Text input with dropdown button" />
              <DropdownButton
                variant="outline-secondary"
                title="categories"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item>ok</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Col>

          <Col>
            <Button>Search</Button>
          </Col>

          <Col>
            <i className="bi bi-person h4"></i>
            &nbsp;&nbsp;&nbsp;
            <i className="bi bi-cart3 medium-icon h4"></i>
            &nbsp;&nbsp;&nbsp;
            <i className="bi bi-heart medium-icon h4"></i>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Header;
