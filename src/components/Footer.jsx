import React from 'react';
import {Container,Col, Row} from "react-bootstrap";
import apple from '../imgs/appleDownload.png';
import google from '../imgs/googlePlay.png';
import { FaLinkedin,FaFacebookSquare,FaTwitterSquare,FaYoutubeSquare} from "react-icons/fa";



function Footer(){

    return(
        <div>
            <Container fluid> 
                <Row className='download' xs="auto">
                    <Col><img src={apple} className='downloadimg'/></Col>
                    <Col><img src={google} className='downloadimg'/></Col>
                </Row>

                <Row className='info'>
                    <Col>
                    <ul className='infolist'>
                    <li className='fheading'>Watch</li>
                    <li>Spotlight</li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Free</li>
                </ul>
                    </Col>
                <Col> 
                <ul className='infolist'>
                    <li className='fheading'>My Account</li>
                    <li> My Netflix</li>
                    <li>Account</li>
                    <li>Setting</li>
                    <li>Account</li>
                    <li>Manage Devices</li>
                </ul>
                </Col>
                <Col> 
                <ul className='infolist'>
                    <li className='fheading'>Features</li>
                    <li> Lists</li>
                    <li>Family</li>
                    <li>Disc to Digital</li>
                    <li>InstaWatch</li>
                    <li>Movies Anywhere</li>
                </ul>
                </Col>

                <Col>
                <ul className='infolist'>
                    <li className='fheading'>Help</li>
                    <li>About Us</li>
                    <li>Devices</li>
                    <li>Support</li>
                    <li>Forums</li>
                    <li>Contact Us</li>
                    <li>Jobs</li>
                </ul>
                 </Col>
                </Row>
                
                <Row  className='media justify-content-end'>
                <Col xs="auto" className='medialogo'> 
                <a href='https://www.linkedin.com' target="_blank" rel="noopener noreferrer">
                     <FaLinkedin size={30} color='blue' />
                </a> </Col>
                <Col xs="auto" className='medialogo'> 
                <a href='https://www.facebook.com' target="_blank" rel="noopener noreferrer">
                    <FaFacebookSquare size={30} color='blue'/> 
                </a></Col>
                <Col xs="auto" className='medialogo'> 
                <a href='https://www.twitter.com' target="_blank" rel="noopener noreferrer">
                    <FaTwitterSquare size={30} color='lightblue'/> 
                </a>
                </Col>
                <Col xs="auto" className='medialogo'> 
                <a href='https://www.youtube.com' target="_blank" rel="noopener noreferrer">
                    <FaYoutubeSquare size={30} color='red'/>
                </a> 
                </Col>
                </Row>
            </Container>

        </div>
    )
    
}
export default Footer;