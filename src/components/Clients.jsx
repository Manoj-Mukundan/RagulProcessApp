import React from 'react';
import dummyLogo from '../assets/R.jpeg';

// ✅ Capitalized component name
const LogoCards = ({ img }) => (
    <div className='col-4 my-2 col-md-2'>
        <img className="img-fluid  shadow-lg rounded-3" src={img} alt="Client Logo" />
    </div>
);

// ✅ Correct usage with capitalized component name
const Clients = () => {
  return (
    <>
    
    <div className='py-5 w-100 bg-dark'>
    <h1 className='text-white text-center py-5'> OUR CLIENTS</h1>
     <div className='container-fluid px-5 w-100'>
        <div className='row'>
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        </div>
    </div>

    <div className='container-fluid px-5  '>
        <div className='row'>
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        </div>
    </div>

    <div className='container-fluid px-5  '>
        <div className='row'>
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        </div>
    </div>

    <div className='container-fluid px-5  '>
        <div className='row'>
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        <LogoCards img={dummyLogo} />
        </div>
    </div>
    </div>
    </>
    
  );
};

export default Clients;
