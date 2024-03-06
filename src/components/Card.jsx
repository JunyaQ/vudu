import React from "react";
import {Col} from "react-bootstrap";

function Card({pic, name}){
    return(
        <div className="showCard">
            <Col className="d-flex justify-content-center">
            <img src={pic} className='cardImg'/> 
            </Col>
            <p className="cardName">{name}</p>
        </div>
    )
}
export default Card;