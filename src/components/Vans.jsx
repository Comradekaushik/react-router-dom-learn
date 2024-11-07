import React from 'react';
import Van from './Van';
import { Link } from 'react-router-dom';
var array = [
    {
        Name : "suzuki",
        type: "open-roof"

    },
    {
        Name : "rtv",
        type: "rugged"
    },
    {
        Name : "toyota",
        type : "luxury"
    }
];

function Vans() {
    

    

    let vanarray = array.map((item,index)=>{
       return <Link to={`/van/${index}`}><Van key= {index} {...item}/></Link>

    })

  return (
    <>
     {vanarray}
    
    </>
    
  )
}


export {array};


export default Vans;