import React from "react";

import image2 from "../../images/Lenovo-1.png";
import image3 from "../../images/Delinea-1.png";
import { Col, Image, Row } from "react-bootstrap";

function ProductSuppliers() {
  return (
    <>
      <Row
        className="justify-content-center align-items-center m-5 border-black "
        sm={6}
      >
        <Col lg={2} sm={1} className=" p-1 align-items-center ">
          <Image src={image3} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image2} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image2} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image3} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image3} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image2} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center ">
          <Image src={image3} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image2} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image2} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image3} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image3} thumbnail />
        </Col>
        <Col lg={2} sm={1} className=" p-1 align-items-center">
          <Image src={image2} thumbnail />
        </Col>
      </Row>
    </>
  );
}
export default ProductSuppliers;
