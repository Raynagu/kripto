import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <h1>
            <Link to='/'>Kripto</Link>
        </h1>
        {/* <ul>
            <li><Link to='/'>Home</Link></li>
            
            <li><Link to='/'>About</Link></li>
        </ul> */}
    </header>
  )
}

export default Header