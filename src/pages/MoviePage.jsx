import React,{useState,useEffect} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {Container } from "react-bootstrap";
import TabOptions from '../components/TabOptions';

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
            <TabOptions dbdata={films} type="movies"/>
        </body>
        
        <footer>
        <Footer/>
        </footer>
        </Container>
    )
}
export default MoviePage;