import {Nav, Container, Tab, Row, Col} from 'react-bootstrap';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';

function TabOptions({dbdata, type}){
    const [select, setSelect] = useState('default');

    // new - old
    const yearData = [...dbdata].sort((a, b) => b.year - a.year);

    // a-z
    const alphabetData = [...dbdata].sort((a, b) => {
        if (a.title.toUpperCase() < b.title.toUpperCase()) return -1;
        if (a.title.toUpperCase() > b.title.toUpperCase()) return 1;
        return 0;
      });
    return(
        <div className='tabMovieSection'>
            <Container fluid>
            
             <Tab.Container id="movie-tabs" defaultActiveKey="default" activeKey={select} onSelect={(choice) => setSelect(choice)}>
        <Nav variant="tabs" defaultActiveKey="/movies">
      <Nav.Item>
        <Nav.Link eventKey="default" >Most Watched</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="release">Release Date</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link eventKey="recent">Recently Added</Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey="default">
          {/* <p>Most watched</p> */}
          <Row md={6} className='movieSection justify-content-center'>
           {dbdata.map(item => (
             <Col className="d-flex justify-content-center" >
                {/* use link and id, plus dbname movie1 or tv1 */}
            <Link to={`/${type}/${item.id}`}>
            <img src={require(`../imgs/movies/${item.img}.jpeg`)} className='movieimg'/> 
            </Link>
            </Col>
        ))}
            </Row>
        </Tab.Pane>
        {/* sort by date */}
        <Tab.Pane eventKey="release">
        {/* <p>Release Date</p> */}
        <Row md={6} className='movieSection justify-content-center'>
           {yearData.map(item => (
             <Col className="d-flex justify-content-center">
           <Link to={`/${type}/${item.id}`}>
            <img src={require(`../imgs/movies/${item.img}.jpeg`)} className='movieimg'/> 
            </Link>
            </Col> 
        ))}
            </Row>
        </Tab.Pane>
        {/* sort by alphabet */}
        <Tab.Pane eventKey="recent">
        {/* <p>Recent Added</p> */}
        <Row md={6} className='movieSection justify-content-center'>
           {alphabetData.map(item => (
             <Col className="d-flex justify-content-center">
           <Link to={`/${type}/${item.id}`}>
            <img src={require(`../imgs/movies/${item.img}.jpeg`)} className='movieimg'/> 
            </Link>
            </Col> 
        ))}
            </Row>
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
    </Container>
        </div>
    )
}

export default TabOptions;