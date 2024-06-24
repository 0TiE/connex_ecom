import React from 'react'
import { Card, Image, Button, Col } from 'react-bootstrap';
import './ProductCard.css';

function ProductCard({ product, view }) {
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
            <Button className="btn-icon carticon"><i className="bi bi-cart-fill"></i></Button>
            <Button className="btn-icon hearticon"><i className="bi bi-heart-fill"></i></Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard