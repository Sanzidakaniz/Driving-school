import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {  Row } from 'react-bootstrap';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Courses = () => {
  const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('./courses.JSON')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    },[])
    return (
        <div className="">
  <Header></Header>
        <Row xs={1} md={2} className="g-4">
        {
            courses.map(course=><Course
                key={course.id}
             course={course}></Course>)
        }
      </Row>
     <Footer></Footer>
       </div>
    );
};



export default Courses;
