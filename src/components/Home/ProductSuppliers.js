import React from "react";
import image from "../../images/RE1Mu3b.jpg";
import image1 from "../../images/WhatsApp-Image-2023-01-04-at-12.26.18.jpg";

import image2 from "../../images/WhatsApp-Image-2023-01-04-at-12.26.26.jpg";

import { Col, Image, Row } from "react-bootstrap";

function ProductSuppliers() {
  return (
    <>
      <Row className="m-5 ">
        <h1>Products</h1>
     
        <Col lg={3}>
          <Image src={image} thumbnail />
        </Col>
        <Col lg={3}>
          <Image src={image1} thumbnail />
        </Col>
        <Col lg={3}>
          <Image src={image} thumbnail />
        </Col>
        <Col lg={3}>
          <Image src={image} thumbnail />
        </Col>
        <Col lg={3}>
          <Image src={image1} thumbnail />
        </Col>
        <Col lg={3}>
          <Image src={image} thumbnail />
        </Col>

        <Col lg={2}>
          <Image src={image} thumbnail />
        </Col>
        <Col lg={2}>
          <Image src={image1} thumbnail />
        </Col>
        <Col lg={2}>
          <Image src={image} thumbnail />
        </Col>
        <Col lg={2}>
          <Image src={image} thumbnail />
        </Col>
        <Col lg={2}>
          <Image src={image1} thumbnail />
        </Col>
        <Col lg={2}>
          <Image src={image} thumbnail />
        </Col>
        
      </Row>
    </>
  );
}
export default ProductSuppliers;
