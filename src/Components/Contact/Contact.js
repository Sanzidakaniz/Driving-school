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
           <h4>Phone: 29580484724</h4>
             <h4>Email: drivingschool123@gmail.com</h4>
            <h4> Address: Chittagong,Bangladesh</h4>
           </ul>
       </div>
      <Footer></Footer>
        </div>
    );
};

export default Contact;