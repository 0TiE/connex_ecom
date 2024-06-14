import React, { useState,useMemo} from 'react'
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
  rearImageUrl: imageUrls[(idx + 1) % imageUrls.length], // Using next image as rear image
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

  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return products.slice(start, end);
  }, [currentPage, products]);

  return ( 
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={3}>
          <h4>Filter</h4>
          <div className="card">
            {['Brands', 'Category', 'Price range', 'Warranty'].map((title, idx) => (
              <article className="filter-group" key={idx}>
                <header className="card-header">
                  <a
                    href="#!"
                    onClick={() => toggleFilter(`collapse_${idx + 1}`)}
                    aria-expanded={filters[`collapse_${idx + 1}`]}
                    className="titleheading"
                  >
                    <i className={`icon-control fa ${filters[`collapse_${idx + 1}`] ? 'fa-chevron-down' : 'fa-chevron-up'}`}></i>
                    <h6 className="title">{title}</h6>
                  </a>
                </header>
                <div className={`filter-content collapse ${filters[`collapse_${idx + 1}`] ? 'show' : ''}`} id={`collapse_${idx + 1}`}>
                  <div className="card-body">
                    {idx < 2 && Array.from({ length: 5 }).map((_, subIdx) => (
                      <Form.Check
                        key={subIdx}
                        type="checkbox"
                        label={`${title.slice(0, -1)} ${subIdx + 1}`}
                        className="custom-control custom-checkbox"
                      />
                    ))}
                    {idx === 2 && (
                      <>
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
                      </>
                    )}
                    {idx === 3 && (
                      ['Any condition', 'Brand new', 'Used items', 'Very old'].map((condition, subIdx) => (
                        <Form.Check
                          key={subIdx}
                          type="radio"
                          name="myfilter_radio"
                          label={condition}
                          className="custom-control custom-radio"
                        />
                      ))
                    )}
                  </div>
                </div>
              </article>
            ))}
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

          <div className={`product-grid ${view === 'list' ? 'list-view' : ''}`}>
            {paginatedProducts.map((product) => (
              <div className="product" key={product.id}>
                <div className="product-img">
                  <img src={product.imageUrl} alt="front product image" />
                  <img src={product.rearImageUrl} alt="rear product image" className="rear-img" />
                </div>
                <div className="product-info">
                  <div>
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">${product.price.toFixed(2)}</span>
                  </div>
                  <a href="#!" className="product-btn">Buy now</a>
                </div>
              </div>
            ))}
          </div>

          <nav className="mt-4">
            <ul className="pagination">
              {Array.from({ length: totalPages }, (_, idx) => (
                <li className={`page-item ${currentPage === idx + 1 ? 'active' : ''}`} key={idx}>
                  <a className="page-link" href="#!" onClick={() => handlePageChange(idx + 1)}>{idx + 1}</a>
                </li>
              ))}
            </ul>
          </nav>
        </Col>
      </Row>
    </Container>
  );
}
  

export default ProductFilter;