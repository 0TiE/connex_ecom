import React from "react";

import image2 from "../../images/Lenovo-1.png";
import image3 from "../../images/Delinea-1.png";
import { Col, Image, Row } from "react-bootstrap";

function ProductSuppliers() {
  return (
    <>
      <Row className="justify-content-center m-5">
        <Col xs={6} sm={4} md={3} lg={2} className="p-2 d-flex justify-content-center">
          <Image src={image3} thumbnail />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="p-2 d-flex justify-content-center">
          <Image src={image2} thumbnail />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="p-2 d-flex justify-content-center">
          <Image src={image2} thumbnail />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="p-2 d-flex justify-content-center">
          <Image src={image3} thumbnail />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="p-2 d-flex justify-content-center">
          <Image src={image3} thumbnail />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="p-2 d-flex justify-content-center">
          <Image src={image2} thumbnail />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="p-2 d-flex justify-content-center">
          <Image src={image3} thumbnail />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="p-2 d-flex justify-content-center">
          <Image src={image2} thumbnail />
        </Col>
        <Col xs={6} sm={4} md={3} lg={2} className="p-2 d-flex justify-content-center">
          <Image src={image2} thumbnail />
        </Col>
      </Row>
    </>
  );
}
export default ProductSuppliers;
