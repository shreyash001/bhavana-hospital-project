import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import setcurrentUser from '../../actions/currentUser';

const Navbar = () => {
  const dispatch = useDispatch();
    const user = useSelector( (state) =>(state.currentUserReducer));
    
    useEffect( () => {
      dispatch(setcurrentUser(JSON.parse(localStorage.getItem('Profile'))));
    },[dispatch])
  return (
    <div className='navbar-container' style={{minHeight:'50px', borderBottom:'3px solid black'}}>
        <div className="navbar">
            <Link to="/" className='navbar-item'>Home</Link>
            <Link to="/about" className='navbar-item'>About</Link>
            <Link to="/" className='navbar-item'>Services</Link>
            <Link to="/" className='navbar-item'>Contact</Link>
            <Link to="/" className='navbar-item'>Team</Link>

            {user === null ? 
                <Link to="/Auth" className='navbar-item nav-link'>Login</Link>:
                <button className='navbar-item nav-link'>Logout</button>
            }
            
        </div>
        
    </div>

  )
}

export default Navbar
