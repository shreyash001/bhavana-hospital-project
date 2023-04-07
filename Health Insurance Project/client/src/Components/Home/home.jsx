import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'


const home = () => {
  return (
   
    <div>


      <h1>Home Page works</h1>

      <button type='button' className='btn'><Link to="/Insurance" style={{textDecoration:"none"}}>Add new insurance</Link></button>
      
    </div>
  )
}

export default home
