import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Navbar() {
  return (

    <>
    
        <div className="App">
              Hi, this is your Commander Header
              <Link to="/about"> About</Link>
              <Link to="/profile"> Profile</Link>
              <Link to="/vans"> Vans</Link>
        </div> 

        <Outlet/>


    
    </>
         
  )
}

export default Navbar