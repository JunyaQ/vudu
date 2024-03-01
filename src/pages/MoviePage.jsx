import React,{useState,useEffect} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Button, Container } from "react-bootstrap";
import FilterBtn from '../components/FilterBtn';

function MoviePage() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/movies')
        .then(response => response.json())
        .then(data => setFilms(data))
        .catch(error => console.error('Error:', error));
    }, []);

    return(
        <Container fluid>
        <header>
        <Navigation/>
        </header>

        <body>
            <FilterBtn/>
        {films.map(film => (
             <div className="d-flex justify-content-center">
            <img src={require(`../imgs/movies/${film.img}.jpeg`)} className='movieimg'/> 
            </div>
             ))}
        </body>
        
        <footer>
        <Footer/>
        </footer>
        </Container>
    )
}
export default MoviePage;