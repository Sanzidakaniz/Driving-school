import React from 'react';
import Header from '../Header/Header';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner-container ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
         <Header></Header>
            <div className="col-md-9">
              <h6 className="title">
                Helping You to Make Yourself An Expert Driver
              </h6>
              <p className="text-white mt-3">
                we are trying to provide safe driving lessons to all.Stay connected  with us and learn how to drive safely.
              </p>
              <button className="mt-3 about-btn btn-danger">Get started</button>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
};

export default Banner;