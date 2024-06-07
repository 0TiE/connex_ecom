import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SingleProduct.css';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from "react-bootstrap/Form";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useState } from 'react';
import sliderimage1 from '../../images/slider.jpg'
import Accordion from 'react-bootstrap/Accordion';
import Header from "../";

function SingleProduct() {

    const breadcrumbitem = {
        textDecoration: 'none',
    };

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (

    <>

    <Header />
    <Container className='mt-5'>
        <Breadcrumb className='mb-5'>
            <Breadcrumb.Item href="#" className="breadcrumbitem" style={breadcrumbitem}>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" className="breadcrumbitem">
                Products
            </Breadcrumb.Item>
            <Breadcrumb.Item active className="breadcrumbitem">Single Product</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
            <Col lg='6'>
            <>
            <Swiper
              style={{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
              <iframe className='youtubevideo' src="https://www.youtube.com/embed/FCe1vPuB954?si=Ji0lDq6o_STvlgCB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src={sliderimage1} />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper mt-5"
            >
              <SwiperSlide className='ac'>
              <iframe width="130" height="150" src="https://www.youtube.com/embed/FCe1vPuB954?si=Ji0lDq6o_STvlgCB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderimage1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={sliderimage1} />
              </SwiperSlide>
            </Swiper>
          </>
            </Col>
            
            <Col lg='6'>
                <Col lg="8" className="mb-3">
                    <h3 className='productheading'>Cisco SG110 8 Port Gigabite Ethernet Switch</h3>
                    <h3 className='productheading'>SG110D-08-UK</h3>
                </Col>
                <Col lg="8" className="mt-5 mb-3">
                    <p className='productprice'>US $35.99</p>
                </Col>
                <Row>
                    <Col>
                        <Row>
                            <Col lg="5">
                                <p className='productQuantity'>Quantity:</p>
                            </Col>
                            <Col lg="4">
                                <Form.Group as={Col} controlId="formGridquantitybox" className='quantitybox'>
                                    <Form.Control />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <p className='availablesold mt-1'>28 available / 18 sold</p>
                    </Col>
                </Row>
                <Col className='mt-4'>
                    <div className="mb-2">
                        <Button className="buynowbtn" variant="primary" size="lg">
                        Buy Now 
                        </Button>{' '}
                    </div>
                </Col>
                <Col>
                    <div className="mb-2 mt-2">
                        <Button className="addtocartbtn" variant="primary" size="lg">
                        Add to Cart 
                        </Button>{' '}
                    </div>
                </Col>
            </Col>
        </Row>

        <Row>
          <Col>
              <h3>Related Items</h3>
          </Col>
        </Row>

        <Row className='mt-5'>
          <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header><b>Description</b></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header><b>Specification</b></Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
          </Col>
        </Row>

    </Container> 

    </>
  );
}

export default SingleProduct