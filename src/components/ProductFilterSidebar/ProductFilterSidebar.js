import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';

function ProductFilterSidebar({ filters, toggleFilter }) {

  return (
    <div>
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
  </div>
  )
}

export default ProductFilterSidebar