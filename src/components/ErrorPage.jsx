import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='ErrorPage'>
        <h2>Page not found.</h2>
        <Link to='/' replace>Home</Link>
    </div>
  )
}

export default ErrorPage