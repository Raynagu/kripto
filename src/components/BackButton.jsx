import React from 'react'
import {BiChevronLeft} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const BackButton = () => {
  return (
    <div className='back-nav-btn'>
        <Link to="/"><BiChevronLeft /></Link>
    </div>
  )
}

export default BackButton