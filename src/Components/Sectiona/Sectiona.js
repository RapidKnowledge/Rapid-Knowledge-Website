import React from 'react'
import "./Sectiona.css"
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Sectiona = () => {
  return (
    <div className='seca'>
        <h1 className='txt1'>Welcome to  Knowledge Portal</h1>
      <br></br>
      <h3 className='txt2'>Improve your Knowledge with Us !</h3>
      <div className='txtbtn'>
        <span className='spn1'><Button variant="primary"><Link className="btn" to="/Explore">Explore</Link></Button></span>
        <span className='spn0'><Button variant="danger"><Link className="btn" to="/About">About Us !</Link></Button></span>
      </div>
    </div>
  )
}

export default Sectiona
