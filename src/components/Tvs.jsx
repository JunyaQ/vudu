import React,{useState,useEffect} from 'react';
import {Container,Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';


function Tvs(){
    const [tvs, setTvs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/tvs')
        .then(response => response.json())
        .then(data => setTvs(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
 
    return(
        <div id='Tvs' className='movies'>
            <Container fluid>
              <div>
           <h2>Free: New Releases</h2>
           {/* make it 6 at a time and can expand to 12 if have time */}
            </div>
            <Row md={6} className='justify-content-center'>
           {tvs.map(tv => (
             <Col className="d-flex justify-content-center movieSection">
            <Link to={`/tvs/${tv.id}`}>
            <img src={require(`../imgs/movies/${tv.img}.jpeg`)} className='tvimg'/> 
            </Link>
            </Col>
        ))}
            </Row>
            </Container>
       
      </div>
    );
}
export default Tvs;