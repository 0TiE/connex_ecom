import React, { useState, useMemo } from 'react';
import './ProductFilter.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Sidebar from '../ProductFilterSidebar/ProductFilterSidebar';
import ProductCard from '../ProductCard/ProductCard';
import Header from "../Home/Header.js";
import Footer from "../Footer/Footer.js";


const imageUrls = [
    
    
    'https://abansit.lk/frontend_assets/img/products/ACAIOC24I44GB1TBTCH.png',
    'https://abansit.lk/frontend_assets/img/products/ACAIOC24I58GB1TBTCH.png',
    'https://abansit.lk/frontend_assets/img/products/ABSMBOD65E3118.png',
    'https://abansit.lk/frontend_assets/img/products/MSIGL66I516512SSD.png',
    'https://abansit.lk/frontend_assets/img/products/MSIGF63I716512.png',
    'https://abansit.lk/frontend_assets/img/products/MSIGF63I516512.png',
    'https://abansit.lk/frontend_assets/img/products/ABSMBOD98E6V100B8P_(1).png',
    'https://abansit.lk/frontend_assets/img/products/LPABMONM215TN1.png',
    'https://abansit.lk/frontend_assets/img/products/LPABMONM238TN.png',
    'https://abansit.lk/frontend_assets/img/products/ABMONM185TN.png',
    'https://abansit.lk/frontend_assets/img/products/LVPCLIPGI516G512SSD.png',
    'https://abansit.lk/frontend_assets/img/products/MSIGF63I516512.png',
    'https://abansit.lk/frontend_assets/img/products/MSIGL66I516512SSD.png',
    'https://abansit.lk/frontend_assets/img/products/LPABMONM238TN.png',
    'https://abansit.lk/frontend_assets/img/products/MSIGF63I516512.png',
    'https://abansit.lk/frontend_assets/img/products/MSIGF63I716512.png',
    'https://abansit.lk/frontend_assets/img/products/ABSMBOD98E6V100B8P_(1).png',
  ];
  
  const products = Array.from({ length: 20 }, (_, idx) => ({
    id: idx,
    name: `Great item name ${idx + 1}`,
    price: 1280 + idx * 10,
    oldPrice: 1980 + idx * 10,
    imageUrl: imageUrls[idx % imageUrls.length],
    rearImageUrl: imageUrls[(idx + 1) % imageUrls.length],
  }));
  
  const itemsPerPage = 8;
  


function ProductFilter() {

    const [filters, setFilters] = useState({
        collapse_1: true,
        collapse_2: true,
        collapse_3: true,
        collapse_4: true,
      });
    
      const [view, setView] = useState('grid');
      const [currentPage, setCurrentPage] = useState(1);
    
      const totalPages = Math.ceil(products.length / itemsPerPage);
    
      const toggleFilter = (filter) => {
        setFilters((prevFilters) => ({
          ...prevFilters,
          [filter]: !prevFilters[filter],
        }));
      };
    
      const toggleView = (view) => {
        setView(view);
      };
    
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
      const paginatedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    

  return (
    <>
    <Header />
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={3}>
          <Sidebar filters={filters} toggleFilter={toggleFilter} />
        </Col>
        <Col md={9}>
          <header className="border-bottom mb-4 pb-3">
            <div className="form-inline">
              <Form.Control as="select" className="mr-2">
                <option>Latest items</option>
                <option>Trending</option>
                <option>Most Popular</option>
                <option>Cheapest</option>
              </Form.Control>
              <div className="btn-group">
                <Button
                  variant="outline-secondary"
                  data-toggle="tooltip"
                  title="List view"
                  onClick={() => toggleView('list')}
                  className={view === 'list' ? 'active' : ''}
                >
                  <i className="fa fa-bars"></i>
                </Button>
                <Button
                  variant="outline-secondary"
                  data-toggle="tooltip"
                  title="Grid view"
                  onClick={() => toggleView('grid')}
                  className={view === 'grid' ? 'active' : ''}
                >
                  <i className="fa fa-th"></i>
                </Button>
              </div>
            </div>
          </header>
          <Row>
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} view={view} />
            ))}
          </Row>
          <nav className="mt-4" aria-label="Page navigation sample">
            <ul className="pagination">
              {Array(totalPages).fill().map((_, idx) => (
                <li key={idx} className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`}>
                  <a className="page-link" href="#!" onClick={() => handlePageChange(idx + 1)}>{idx + 1}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>
  )
}

export default ProductFilter