import React from 'react'
import "./Sectiona.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Sectiona = () => {
  return (
    <div className='seca'>
      <div className='row'>
        <div className='col-md-8'>
        <h1 className='txt1'>Welcome to Rapid Knowledge</h1>
      <br></br>
      <h3 className='txt2'>Improve your Knowledge with Us !</h3>
        </div>
        <div className='col-md-4'>
        <span className='spn1'><Button variant="primary"><Link className="btn" to="/Explore">Explore</Link></Button></span>
        <span className='spn0'><Button variant="danger"><Link className="btn" to="/About">About Us !</Link></Button></span>
        </div>
      </div>
    </div>
  )
}

export default Sectiona
