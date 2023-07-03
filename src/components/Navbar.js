import React from 'react'
import './Navbar.css' 
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (

    <Link to = '/'>
      <div>
        <div className='navbar'>
            
            <h1>Crypto <span className='orange'>Bucks</span></h1>
        </div>
      </div>
    </Link>
    
  )
}

export default Navbar