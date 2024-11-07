import React from 'react';
import Missile from './Missile';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function Missiles() {

  let array = [
    

{
    Name : "9K720 Iskander",
    type : "ballistic"

},
{
    Name : "Ababil-100",
    type : "ballistic"
},
{
    Name :"Al-Samoud 2",
    type : "ballistic"
},
{
    Name :"DF-12",
    type : "ballistic"
},
{
    Name :"Fateh-110",
    type : "ballistic"
},
{
    Name :"Ghadr-110",
    type : "ballistic"
},
{
    Name :"LORA",
    type : "ballistic"
},
{
    Name :"MGM-140 ATACMS",
    type : "ballistic"
},
{
    Name :"OTR-21 Tochka",
    type : "ballistic"
},
{
    Name :"Qaher-1/2M",
    type : "ballistic"
},


{
    Name :"V-2",
    type : "ballistic"
},
{
    Name :"Zolfaghar",
    type : "ballistic"
},
{
    Name :"Kh-47M2 Kinzhal",
    type : "ballistic"
},


{
    Name : "3M-54 Kalibr",
    type : "supersonic"
}, 
{
    Name : "3M-51 Alfa",
    type : "supersonic"
} ,

{
    Name : "ASM-3",
    type : "supersonic"
}, 
{
    Name : "BrahMos",
    type : "supersonic"
}, 
{
    Name : "Blyskavka",
    type : "supersonic"
}, 
{
    Name : "C-101",
    type : "supersonic"
}, 

{
    Name : "C-803",
    type : "supersonic"
},
{
    Name : "C-805",
    type : "supersonic"
} 




  ];

  const [searchParams,SetSearchParams] = useSearchParams();
  const typefilter= searchParams.get("type") ;
  //   console.log(typefilter);
  //   console.log(searchParams.get("type"));


  const todisplayarray = typefilter ? array.filter(missile=>
    missile.type === typefilter) : array;
   
  
  let missilesarray = todisplayarray.map((missile,index)=>{
    return  <Missile {...missile} key={'id' + index}/>
  });

  
  return (
    <>
    
    <div>Missiles</div>

    

    {missilesarray}
    
    </>
    
  )
}

export default Missiles