import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Table, Button, Pagination, Card} from "react-bootstrap/";
import './WatchlistComponent.css';

const watchlistItems = [
    {
      name: '8-Port Gigabit PoE+ Switch',
      price: 32.99,
      originalPrice: 35.99,
      imageUrl: 'https://abansit.lk/frontend_assets/img/products/ACAIOC24I34GB1TB.png', 
    },
    {
      name: '8-Port Gigabit PoE+ Switch',
      price: 32.99,
      originalPrice: 35.99,
      imageUrl: 'https://abansit.lk/frontend_assets/img/products/MSIGL66I516512SSD.png', 
    },
    {
      name: '8-Port Gigabit PoE+ Switch',
      price: 32.99,
      originalPrice: 35.99,
      imageUrl: 'https://abansit.lk/frontend_assets/img/products/LPABMONM215TN1.png', 
    },
    {
      name: '8-Port Gigabit PoE+ Switch',
      price: 32.99,
      originalPrice: 35.99,
      imageUrl: 'https://abansit.lk/frontend_assets/img/products/ACAIOC24I34GB1TB.png', 
    },
    {
      name: '8-Port Gigabit PoE+ Switch',
      price: 32.99,
      originalPrice: 35.99,
      imageUrl: 'https://abansit.lk/frontend_assets/img/products/MSIGL66I516512SSD.png', 
    },
    {
      name: '8-Port Gigabit PoE+ Switch',
      price: 32.99,
      originalPrice: 35.99,
      imageUrl: 'https://abansit.lk/frontend_assets/img/products/LPABMONM215TN1.png', 
    },
    {
      name: '8-Port Gigabit PoE+ Switch',
      price: 32.99,
      originalPrice: 35.99,
      imageUrl: 'https://abansit.lk/frontend_assets/img/products/ACAIOC24I34GB1TB.png', 
    },
    {
      name: '8-Port Gigabit PoE+ Switch',
      price: 32.99,
      originalPrice: 35.99,
      imageUrl: 'https://abansit.lk/frontend_assets/img/products/MSIGL66I516512SSD.png', 
    },
    {
      name: '8-Port Gigabit PoE+ Switch',
      price: 32.99,
      originalPrice: 35.99,
      imageUrl: 'https://abansit.lk/frontend_assets/img/products/LPABMONM215TN1.png', 
    },
  ];

  const ITEMS_PER_PAGE = 6;

function WatchlistComponent() {

    const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = watchlistItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(watchlistItems.length / ITEMS_PER_PAGE);

  return (
    <Container>
        <Row>
            <h3>Orders</h3>
            <Card className="mb-3 mt-4" style={{ backgroundColor: '#D9D9D9' }}>
                <Card.Body>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index}>
                        <td className="align-middle">
                            <Row>
                            <Col xs={4} sm={3} md={3} lg={4}>
                                <img
                                src={item.imageUrl}
                                alt={item.name}
                                className="img-fluid"
                                />
                            </Col>
                            <Col xs={8} sm={9} md={10} lg={7} className="align-middle itemname">
                                {item.name}
                            </Col>
                            </Row>
                        </td>
                        <td className="align-middle">
                            <div className="price">
                            <span className='price1'>${item.price.toFixed(2)}</span>
                            <span className="text-muted">
                                <s>${item.originalPrice.toFixed(2)}</s>
                            </span>
                            </div>
                        </td>
                        <td className="align-middle ">
                            <div className='btnicons'>
                            <Button variant="light" className='cart-icon'>
                                <i className="bi bi-cart"></i>
                            </Button>
                            <Button variant="light" className='close-icon'>
                                <i className="bi bi-x-circle"></i>
                            </Button>
                            </div>
                        </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-end">
                    <Pagination>
                    <Pagination.Prev 
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    />
                    {[...Array(totalPages).keys()].map(number => (
                        <Pagination.Item
                        key={number + 1}
                        active={number + 1 === currentPage}
                        onClick={() => handlePageChange(number + 1)}
                        >
                        {number + 1}
                        </Pagination.Item>
                    ))}
                    <Pagination.Next 
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    />
                    </Pagination>
                </div>
                </Card.Body>
            </Card>
        </Row>
    </Container>
  )
}

export default WatchlistComponent