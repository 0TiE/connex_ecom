import React, { useState } from 'react'
import './ProductFilter.css';
import { Container, Row, Col, Card, Image, Button, Form } from 'react-bootstrap';

const imageUrls = [
  'https://abansit.lk/frontend_assets/img/products/LVPCLV15I52GBUGC_2.png',
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
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={3}>
          <h4>Filter</h4>
          <div className="card">
            <article className="filter-group">
              <header className="card-header">
                <a
                  href="#!"
                  onClick={() => toggleFilter('collapse_1')}
                  aria-expanded={filters.collapse_1}
                  className="titleheading"
                >
                  <i className={`icon-control fa ${filters.collapse_1 ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                  <h6 className="title">Brands</h6>
                </a>
              </header>
              <div className={`filter-content collapse ${filters.collapse_1 ? 'show' : ''}`} id="collapse_1">
                <div className="card-body">
                  {Array(5).fill().map((_, idx) => (
                    <Form.Check
                      key={idx}
                      type="checkbox"
                      label={`Brand ${idx + 1}`}
                      className="custom-control custom-checkbox"
                    />
                  ))}
                </div>
              </div>
            </article>
            <article className="filter-group">
              <header className="card-header">
                <a
                  href="#!"
                  onClick={() => toggleFilter('collapse_2')}
                  aria-expanded={filters.collapse_2}
                  className="titleheading"
                >
                  <i className={`icon-control fa ${filters.collapse_2 ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                  <h6 className="title">Category</h6>
                </a>
              </header>
              <div className={`filter-content collapse ${filters.collapse_2 ? 'show' : ''}`} id="collapse_2">
                <div className="card-body">
                  {Array(5).fill().map((_, idx) => (
                    <Form.Check
                      key={idx}
                      type="checkbox"
                      label={`Category ${idx + 1}`}
                      className="custom-control custom-checkbox"
                    />
                  ))}
                </div>
              </div>
            </article>
            <article className="filter-group">
              <header className="card-header">
                <a
                  href="#!"
                  onClick={() => toggleFilter('collapse_3')}
                  aria-expanded={filters.collapse_3}
                  className="titleheading"
                >
                  <i className={`icon-control fa ${filters.collapse_3 ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                  <h6 className="title">Price range</h6>
                </a>
              </header>
              <div className={`filter-content collapse ${filters.collapse_3 ? 'show' : ''}`} id="collapse_3">
                <div className="card-body">
                  <Form.Range className="custom-range" min="0" max="100" />
                  <Row>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Min</Form.Label>
                        <Form.Control type="number" placeholder="$0" />
                      </Form.Group>
                    </Col>
                    <Col md={6} className="text-right">
                      <Form.Group>
                        <Form.Label>Max</Form.Label>
                        <Form.Control type="number" placeholder="$1000" />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Button className="btn-block" variant="primary">Apply</Button>
                </div>
              </div>
            </article>
            <article className="filter-group">
              <header className="card-header">
                <a
                  href="#!"
                  onClick={() => toggleFilter('collapse_4')}
                  aria-expanded={filters.collapse_4}
                  className="titleheading"
                >
                  <i className={`icon-control fa ${filters.collapse_4 ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                  <h6 className="title">Warranty</h6>
                </a>
              </header>
              <div className={`filter-content collapse ${filters.collapse_4 ? 'show' : ''}`} id="collapse_4">
                <div className="card-body">
                  {['Any condition', 'Brand new', 'Used items', 'Very old'].map((condition, idx) => (
                    <Form.Check
                      key={idx}
                      type="radio"
                      name="myfilter_radio"
                      label={condition}
                      className="custom-control custom-radio"
                    />
                  ))}
                </div>
              </div>
            </article>
          </div>
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
              <Col key={product.id} md={view === 'grid' ? 4 : 12} className="mb-4">
                <Card className={`card-product-${view}`}>
                  <Row className={view === 'list' ? 'no-gutters' : ''}>
                    <Col md={view === 'list' ? 4 : 12}>
                      <Image
                        src={product.imageUrl}
                        className="card-img-top"
                        alt={product.name}
                        fluid
                      />
                    </Col>
                    <Col md={view === 'list' ? 8 : 12}>
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <div className="price-wrap mt-2">
                          <span className="price">${product.price}</span>
                          <del className="price-old">${product.oldPrice}</del>
                        </div>
                        <Button className={`btn-block ${view === 'list' ? 'btn-sm' : ''}`} variant="primary">Add to cart</Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>

          <nav className="mt-4" aria-label="Page navigation sample">
            <ul className="pagination">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a className="page-link" href="#!" onClick={() => handlePageChange(currentPage - 1)}>Previous</a>
              </li>
              {[...Array(totalPages).keys()].map((num) => (
                <li key={num + 1} className={`page-item ${currentPage === num + 1 ? 'active' : ''}`}>
                  <a className="page-link" href="#!" onClick={() => handlePageChange(num + 1)}>{num + 1}</a>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <a className="page-link" href="#!" onClick={() => handlePageChange(currentPage + 1)}>Next</a>
              </li>
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}
  

export default ProductFilter;