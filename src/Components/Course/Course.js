import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {image,name,price}=props.course;
 
    return (
     <div>
        <Col mt-3>
       <Card>
         <Card.Img variant="top h-50" src={image} />
         <Card.Body>
          <Card.Title >Course Name:<span>{name}</span></Card.Title>
         <Card.Text>Price:
            ${price}
           </Card.Text>
         </Card.Body>
      </Card>
     </Col>
     </div>
    );
};

export default Course;