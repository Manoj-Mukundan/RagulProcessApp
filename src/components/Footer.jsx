import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (

    <>
      <div className='container-fluid bg-light' style={{minHeight:'400px'}}>
        <div className='row'>
          <div className='col'>
            <h4>Explore more</h4>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/">Home</Link>
          </div>

          <div className='col'>
          <button>Contact Us</button>
          </div>
        </div>
      </div>
    </>
    // <div
    //   className="container d-flex justify-content-center align-items-center"
    //   style={{ minHeight: '200px' }}
    // >
    //   <div className="row text-center">
    //     <div className="col">
    //       <Link className="nav-link" to="/">Home</Link>
    //     </div>
    //     <div className="col">
    //       <Link className="nav-link" to="/Infrastructure">Infrastructure</Link>
    //     </div>
    //     <div className="col">
    //       <Link className="nav-link" to="/Clients">Clients</Link>
    //     </div>
    //     <div className="col">
    //       <Link className="nav-link" to="/Services">Services</Link>
    //     </div>
    //     <div className="col">
    //       <Link className="nav-link text-nowrap" to="/ContactUs">Contact Us</Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
