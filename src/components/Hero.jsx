import React from 'react'
import dummy from '../assets/Dummy.jpg';

const Section = ({ title, subtitle }) => (
  <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
    <div
      className="position-sticky top-0 w-100 h-100"
      style={{ zIndex: 0 }}
    >
      <img
        src={dummy}
        alt="Hero"
        className="img-fluid w-100 h-100"
        style={{ objectFit: 'cover' }}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-black" style={{opacity:'40%'}}></div>
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-4 fw-bold">{title}</h1>
        <p className="lead">{subtitle}</p>
      </div>
    </div>
  </div>
);

const Hero = ({title, subtitle}) => {
  return (
    <>
      <Section title={title} subtitle={subtitle} />
    </>)
}

export default Hero