import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Instructor from '../Instructor/Instructor';
import './About.css'

const About = () => {
    
    const [instructors,setInstructors]=useState([]);
    useEffect(()=>{
        fetch('./instructors.JSON')
        .then(res=>res.json())
        .then(data=>setInstructors(data))
    },[])
    return (
        <div >
            <div className="new-div">
            <Header></Header>
            <h1>About Us</h1>
           <p>We provide good and experience instructor to give you better driving lesson.Driving is so impoetant now adays we are very mush dependent on vehicles.so,safe driving  become much important.we will help you to learn better driving.</p>
           <br />
           <h5>Instructors Information</h5>
           <hr />
     </div>
        <Row xs={1} md={2} className="g-4">
        {
           instructors.map(instructor=><Instructor
                key={instructor.id}
                instructor={instructor}></Instructor>)
        }
      </Row>
      <Footer></Footer>
              </div>
                
    );   
};

export default About;