import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Sites from '../Sites/Sites';
import './Display.css';

const Display = () => {
    const [sites,setSites]=useState([]);
    useEffect(()=>{
        fetch('./sites.JSON')
        .then(res=>res.json())
        .then(data=>setSites(data))
    },[])
    return (
        <div>
            <h1>Our Courses</h1>
           
               <Row xs={1} md={2} className="g-4 mb-4">
        {
            sites.map(site=><Sites
                key={site.id}
             site={site}></Sites>)
        }
      </Row> 
        </div>
    );
};

export default Display;