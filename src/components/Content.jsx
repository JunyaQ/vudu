import React from "react";
import { Container } from "react-bootstrap";

function Content(){
return(
<div>
<section className="content-section bg-light">
        <Container fluid className="content1">
          <h2>$5.99 CINEMA SPOTLIGHT</h2>
          <Row className="justify-content-md-center">
            <Col md={6}>
            </Col>
            <Col md={6}>
              <Image  fluid />
            </Col>
          </Row>
        </Container>
      </section>
</div>

)
}
export default Content