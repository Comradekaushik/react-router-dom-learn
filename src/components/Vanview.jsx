import React from 'react';
import { array } from './Vans';
import { useParams } from 'react-router-dom';
import Van from './Van';

function Vanview() {
    const params = useParams();



  return (
    <>
    <h1>
       vanview 
    </h1>

    <div>
        <Van {...array[params.id]}/>

    </div>
        


    
    
    </>
  )
}

export default Vanview