import React from "react";
import { Container,Row, Col, Image } from "react-bootstrap";
import movie1 from "../imgs/movies/movie1.jpeg";
function Content(){
return(
<div>
<section className="content-section">
<Container fluid>
        <Row className="content-row">
          <Col className="text-column" md={2}>
            <div className="content-title">
              <h1>$5.99 <br />CINEMA <br />SPOTLIGHT</h1>
            </div>
          </Col>
      
          <Col md={2}>
            <img className="content-v v1" src={require('../imgs/movies/movie1.jpeg')} alt="Movie 1"/>
          </Col>
          <Col md={2}>
            <img className="content-v v2" src={require('../imgs/movies/movie2.jpeg')} alt="Movie 2"/>
          </Col>
          <Col md={2}>
            <img className="content-v v3" src={require('../imgs/movies/movie3.jpeg')} alt="Movie 3"/>
          </Col>
          <Col md={2}>
            <img className="content-v v4" src={require('../imgs/background/movie4.jpeg')} alt="Movie 4"/>
          </Col>
          
        </Row>
      </Container>

      </section>
</div>

)
}
export default Content