import React,{useState,useEffect} from 'react';
import { Container } from "react-bootstrap";
import TabOptions from '../../components/TabOptions/TabOptions';
function TvPage() {
    const [tvs, setTvs] = useState([]);

    useEffect(()=>{

        //Async operation //POST,PUT OR DELETE
        fetch("http://localhost:3001/tvs")
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
              setTvs(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })

    },[])

    return(
        <Container fluid>

        <body>
            <TabOptions dbdata={tvs} type="tvs"/>
        </body>

        </Container>
    )
}
export default TvPage;