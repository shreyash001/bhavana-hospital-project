// import React from 'react'
// import "./home.css"
// import { Link } from 'react-router-dom'


// const home = () => {
//   return (
   
//     <div>


//       <h1>Home Page works</h1>

//       <button type='button' className='btn'><Link to="/Insurance" style={{textDecoration:"none"}}>Add new insurance</Link></button>
      
//     </div>
//   )
// }

// export default home


import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import Auth from '../../Pages/Auth/Auth'


const home = () => {
  return (

    <div className='d-flex home-container' >
      <div className="joinUsContainer d-flex flex-column justify-content-center" style={{width:"50%",padding:"10%"}}>
      <h1 style={{textColor:"blue"}}>Web<br/>Page<br/></h1>
      <p style={{color:"white"}}>Here our team is with you always</p>
      <button type='button' className='btn home-btn'><Link to="/Insurance" style={{textDecoration:"none"}}>Join Us</Link></button>
      </div>
      <Auth/>

    </div>
  )
}
