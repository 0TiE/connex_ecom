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

function SingleProduct() {

    const breadcrumbitem = {
        textDecoration: 'none',
    };

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    
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
                <img className='sliderimage' src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img className='sliderimage' src="https://swiperjs.com/demos/images/nature-10.jpg" />
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
              className="mySwiper"
            >
              <SwiperSlide className='ac'>
              <iframe width="130" height="150" src="https://www.youtube.com/embed/FCe1vPuB954?si=Ji0lDq6o_STvlgCB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
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

        {/* <Row fluid="md" className='mt-5'>
                <Row>
                    <Col>1 of 1</Col>
                </Row>
        </Row> */}
    </Container> 
  )
}

export default SingleProduct