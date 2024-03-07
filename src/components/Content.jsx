import React from "react";
import { Container,Row, Col, Image } from "react-bootstrap";
import movie1 from "../imgs/movies/movie1.jpeg";
function Content(){
return(
<div>
<section className="content-section">
        <Container fluid className="content1">
          <div className="title">
          <h2>$5.99 <br/>CINEMA <br/>SPOTLIGHT</h2>
          </div>

          <img className="content-image" src={require(`../imgs/movies/movie2.jpeg`)}/>
          <img className="content-image" src={require(`../imgs/movies/movie7.jpeg`)}/>
          <img className="content-image" src={require(`../imgs/movies/movie5.jpeg`)}/>
       

          <div className="wide-container">
            <img  className="wide-image" src={require(`../imgs/background/movie4.jpeg`)}/>
          </div>

          
        </Container>
      </section>
</div>

)
}
export default Content