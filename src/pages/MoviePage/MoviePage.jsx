import React,{useState,useEffect} from 'react';
import {Container } from "react-bootstrap";
import TabOptions from '../../components/TabOptions/TabOptions';

function MoviePage() {
    const [films, setFilms] = useState([]);

    useEffect(()=>{

        //Async operation //POST,PUT OR DELETE
        fetch("http://localhost:3001/movies")
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
              setFilms(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })

    },[])

    return(
        <Container fluid>

        <body>
            <TabOptions dbdata={films} type="movies"/>
        </body>
        
    
        </Container>
    )
}
export default MoviePage;