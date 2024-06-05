import React from "react";
import Carousel from "react-bootstrap/Carousel";
import image2 from "../../images/c2.png";
import image3 from "../../images/c1.png";
import { Image } from "react-bootstrap";
import "./PromoCarousel.css";

function PromoCarousel() {
  return (
    <Carousel data-bs-theme="light" className="mt-5 custom-carousel">
      <Carousel.Item>
        <Image
          className="d-block w-100 border-0 rounded-5"
          src={image3}
          alt="First slide"
        />
        {/* <Carousel.Caption>
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 border-0 rounded-5"
          src={image2}
          alt="Second slide"
        />
        {/* <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 border-0 rounded-5"
          src={image3}
          alt="Third slide"
        />
        {/* <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default PromoCarousel;
