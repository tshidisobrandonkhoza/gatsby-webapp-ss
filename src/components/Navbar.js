import React from 'react'
import { Link } from 'gatsby';
function Navbar() {
  return (
    <nav>
      <h1>SS Company</h1>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/services'>Services</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar
