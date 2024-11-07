import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (

    <>
        <div>Layout to be rendered in nested route</div>
        <Outlet/> 
         {/* outlet is like a placeholder for components  */}
         {/* which will be rendered alongwith based on route */}

    </>
    
  )
}
