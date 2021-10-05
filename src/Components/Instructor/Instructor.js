import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Instructor.css'
const Instructor = (props) => {
    const {image,name,experience}=props.instructor;
    return (
               <Col>
             <Card className="w-75 h-25 ms-4">
               <Card.Img variant="top h-50 w-100" src={image} />
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