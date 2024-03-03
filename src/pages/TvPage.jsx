import React,{useState,useEffect} from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import TabOptions from '../components/TabOptions';
function TvPage() {
    const [tvs, setTvs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/tvs')
        .then(response => response.json())
        .then(data => setTvs(data))
        .catch(error => console.error('Error:', error));
    }, []);

    return(
        <Container fluid>
        <header>
        <Navigation/>
        </header>

        <body>
            <TabOptions dbdata={tvs} type="tvs"/>
        </body>
        
        <footer>
        <Footer/>
        </footer>
        </Container>
    )
}
export default TvPage;