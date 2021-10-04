import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Instructor.css'
const Instructor = (props) => {
    const {image,name,experience}=props.instructor;
    return (
               <Col mt-3>
             <Card>
               <Card.Img variant="top" src={image} />
               <Card.Body>
                <Card.Title >Instructor Name: <span>{name}</span></Card.Title>
               <Card.Title>Experience Year: <span>{experience}</span>
                 </Card.Title>
               </Card.Body>
            </Card>
           </Col>    
    );
};

export default Instructor;