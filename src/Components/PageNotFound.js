import React from 'react'
import { Link } from 'react-router-dom';


const PageNotFound = () => {
  return (
    <div className='messing'>
        <h3>Page Not Found 404</h3>
        <Link className='returnhome' to="/" > Return to Home Page</Link>
    </div>
  )
}

export default PageNotFound
