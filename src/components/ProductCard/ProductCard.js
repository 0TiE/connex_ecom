import React, { useState, Component } from 'react';
import { Card, Image, Button, Col, Modal, Row } from 'react-bootstrap';
import './ProductCard.css';
import Slider from "react-slick";
import { baseUrl } from "https://abansit.lk/frontend_assets/img/products/ACAIOC24I44GB1TBTCH.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProductCard({ product, view }) {

  const [showModal, setShowModal] = useState(false);

  const handleCartClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={`${baseUrl}/abstract0${i + 1}.jpg`} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Col key={product.id} md={view === 'grid' ? 4 : 12}>
      <Card className={`product-card ${view === 'list' ? 'list-view' : 'grid-view'}`}>
        <div className="img-wrap">
          <Image src={product.imageUrl} className="img-front" alt={product.name} />
          <Image src={product.rearImageUrl} className="img-rear" alt={product.name} />
        </div>
        <Card.Body>
          <h6 className="title">{product.name}</h6>
          <div className="price-wrap">
            <span className="proprice">${product.price}</span>
            <del className="price-old">${product.oldPrice}</del>
          </div>
          <div className={`button-wrap ${view === 'list' ? 'list-buttons' : ''}`}>
            <Button className="btn-icon carticon" onClick={handleCartClick}><i className="bi bi-cart-fill"></i></Button>
            <Button className="btn-icon hearticon"><i className="bi bi-heart-fill"></i></Button>
          </div>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Product Added to Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <img src={baseUrl + "/abstract01.jpg"} />
                  </div>
                  <div>
                    <img src={baseUrl + "/abstract02.jpg"} />
                  </div>
                  <div>
                    <img src={baseUrl + "/abstract03.jpg"} />
                  </div>
                  <div>
                    <img src={baseUrl + "/abstract04.jpg"} />
                  </div>
                </Slider>
              </div>
            </Col>
            <Col>
            
            </Col>
          </Row >
        </Modal.Body>
      </Modal>
    </Col>
    
  )
}

export default ProductCard;