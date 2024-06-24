import React, { useState, useMemo } from 'react';
import './ProductFilter.css';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Sidebar from '../ProductFilterSidebar/ProductFilterSidebar';
import ProductCard from '../ProductCard/ProductCard';
import Header from "../Home/Header.js";
import Footer from "../Footer/Footer.js";


const imageUrls = [
    'data:image/jpeg;base64,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',
    'https://abansit.lk/frontend_assets/img/products/ACPCL515I311G4.png',
    'https://abansit.lk/frontend_assets/img/products/ACAIOC24I34GB1TB.png',
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