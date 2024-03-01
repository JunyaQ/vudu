import React,{useState,useEffect} from 'react';
import {Container,Row, Col} from "react-bootstrap";




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
              <div className='movieSectionHeader'>
           <h2>Featured Films</h2>
           {/* make it 6 at a time and can expand to 12 if have time */}
            </div>
            <Row md={6} className='movieSection justify-content-center'>
           {films.map(film => (
             <Col className="d-flex justify-content-center">
            <img src={require(`../imgs/movies/${film.img}.jpeg`)} className='movieimg'/> 
            </Col>
        ))}
            </Row>
            </Container>
       
      </div>
    );
}
export default Movies;