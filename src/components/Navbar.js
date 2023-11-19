import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby';

function Navbar() {

const data = useStaticQuery(graphql`
query {
  site {
    siteMetadata { 
      title
    }
  }
}
`);

const {title} = data.site.siteMetadata;
  return (
    <nav>
      <h1>{title}</h1>
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
