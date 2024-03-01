import React,{useState,useEffect} from 'react';
import {Container,Row, Col} from "react-bootstrap";




function Tvs(){
    const [tvs, setTvs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/tvs')
        .then(response => response.json())
        .then(data => setTvs(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
 
    return(
        <div id='Tvs' className='tvs'>
            <Container fluid>
              <div className='tvSectionHeader'>
           <h2>Free: New Releases</h2>
           {/* make it 6 at a time and can expand to 12 if have time */}
            </div>
            <Row md={6} className='movieSection justify-content-center'>
           {tvs.map(tv => (
             <Col className="d-flex justify-content-center">
            <img src={require(`../imgs/movies/${tv.img}.jpeg`)} className='tvimg'/> 
            </Col>
        ))}
            </Row>
            </Container>
       
      </div>
    );
}
export default Tvs;