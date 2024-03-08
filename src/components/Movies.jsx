import React,{useState,useEffect} from 'react';
import {Container,Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';






function Movies(){
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/movies')
        .then(response => response.json())
        .then(data => setFilms(data))
        .catch(error => console.error('Error:', error));
    }, []);
  
 
    return(
        <div id='Movies' className='movies'>
        <Container fluid>
          <div>
       <h2 className='mainpageTitle'>Free: New Releases</h2>
       {/* make it 4 at a time and can expand to 12 if have time */}
        </div>
        <Row md={6} className='justify-content-center'>
       {films.slice(0,4).map(film => (
         <Col className="d-flex justify-content-center movieSection">
        <Link to={`/movies/${film.id}`}>
        <img src= {`${film.img}`} className='tvmovieimg' /> 
        </Link>
        </Col>
    ))}
        </Row>
        </Container>
   
  </div>
);
}
export default Movies;