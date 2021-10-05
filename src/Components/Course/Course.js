import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = (props) => {
    const {image,name,price}=props.course;
    return (
     <div>
        <Col>
        <Card className="w-75 h-50 ms-4" >
         <Card.Img variant="top h-50 w-100" src={image} />
         <Card.Body>
          <Card.Title >Course Name: <span>{name}</span></Card.Title>
         <Card.Title>Course Fee: <span>${price}</span>
           </Card.Title>
           <Link to="/">
           <button>Enroll Now</button></Link>
         </Card.Body>
      </Card>
     </Col>
     </div>
    );
};

export default Course;