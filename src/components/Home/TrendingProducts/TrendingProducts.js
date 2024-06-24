import React from "react";
import "./../TrendingProducts/TrendingProducts.css";
import { Card, Image, Row, Container } from "react-bootstrap";
// import image3 from "../../../images/2017_PD-Page-Boxshots_TIS.png";
// import image4 from "../../../images/TPE-LG80-4-550x550.jpeg";
// import image5 from "../../../images/lenovo.jpeg";
// import { Image } from "react-bootstrap";
import ReactCardSlider from 'react-card-slider-component';
function TrendingProducts() {
 

  return (
    <> <center className="mb-5"><h1>Suggest for You</h1></center>
      <div className="d-flex justify-content-center align-items-center ">
       
        <Container >
          <Row  className="justify-content-center align-items-center m-5 gap-1">
            <Card style={{ width: "18rem" ,}}className="border-0 ">
              <Image
                src="https://abansit.lk/frontend_assets/img/products/LVPCLCEL4GB256W.png"
                className="card-img-top"
                alt="Chicago Skyscrapers"
                fluid
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                  
                </Card.Text>
              </Card.Body>
              
              <Card.Body >
              <Card.Link href="/products/SingleProductView"  className="text-dark">Lenovo</Card.Link>
              <Card.Link href="#">{'  '}More</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}className="border-0">
              <Image
                src="https://abansit.lk/frontend_assets/img/products/LPABMONM215TN1.png"
                className="card-img-top"
                alt="Chicago Skyscrapers"
                fluid
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              
              <Card.Body>
              <Card.Link href="#" className="text-dark">Lenovo</Card.Link>
              <Card.Link href="#">More</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}className="border-0">
              <Image
                src="https://abansit.lk/frontend_assets/img/products/F55V4-560.png"
                className="card-img-top"
                alt="Chicago Skyscrapers"
                fluid
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              
              <Card.Body>
              <Card.Link href="#" className="text-dark">SIGNAGES  </Card.Link>
              <Card.Link href="#">More</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}className="border-0">
              <Image
                src="https://abansit.lk/frontend_assets/img/products/MSIGF63I516512.png"
                className="card-img-top"
                alt="Chicago Skyscrapers"
                fluid
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              
              <Card.Body >
                <Card.Link href="#" className="text-dark ">MSI</Card.Link>
                
                <Card.Link href="#">More</Card.Link>
              </Card.Body>
            </Card>
            {/* <Card style={{ width: "18rem" }}className="border-0">
              <Image
                src="https://abansit.lk/frontend_assets/img/products/LVPCLCEL4GB256W.png"
                className="card-img-top"
                alt="Chicago Skyscrapers"
                fluid
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              
              <Card.Body>
              <Card.Link href="#" className="text-dark">Lenovo</Card.Link>
              <Card.Link href="#">More</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Image
                src="https://abansit.lk/frontend_assets/img/products/LVPCLCEL4GB256W.png"
                className="card-img-top"
                alt="Chicago Skyscrapers"
                fluid
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              
              <Card.Body>
              <Card.Link href="#" className="text-dark">Lenovo</Card.Link>
              <Card.Link href="#">More</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Image
                src="https://abansit.lk/frontend_assets/img/products/F55V4-560.png"
                className="card-img-top"
                alt="Chicago Skyscrapers"
                fluid
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              
              <Card.Body>
              <Card.Link href="#" className="text-dark">SIGNAGES  </Card.Link>
              <Card.Link href="#">More</Card.Link>
              </Card.Body>
            </Card>
            <Card style={{ width: "18rem" }}>
              <Image
                src="https://abansit.lk/frontend_assets/img/products/MSIGF63I516512.png"
                className="card-img-top"
                alt="Chicago Skyscrapers"
                fluid
              />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              
              <Card.Body>
                <Card.Link href="#" className="text-dark">MSI</Card.Link>
                <Card.Link href="#">More</Card.Link>
              </Card.Body>
            </Card> */}
          </Row>
        </Container>
        
      
      </div>

      {/* <ReactCardSlider slides={slides}/> */}
  
    </>
  );
}

export default TrendingProducts;
