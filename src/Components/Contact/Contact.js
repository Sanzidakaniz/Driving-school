import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Contact.css'

const Contact = () => {
    return (
      <div>
          <Header></Header>
            <div className="contact-class">
            <ul>
           <h4><span>Phone:</span> +88880000</h4><br />
             <h4><span>Email:</span> drivingschool123@gmail.com</h4><br />
            <h4> <span>Address:</span> Chittagong,Bangladesh</h4>
           </ul>
       </div>
      <Footer></Footer>
        </div>
    );
};

export default Contact;