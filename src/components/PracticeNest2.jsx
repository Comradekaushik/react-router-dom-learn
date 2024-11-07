import React from 'react';
import { useOutletContext } from 'react-router-dom';

function PracticeNest2() {
// const [valueGot, setValueGot] = useOutletContext();
   const valueGot = useOutletContext(); //passed prop
  return (

    <div>
        PracticeNest2
        {valueGot}
    </div>
  )
}

export default PracticeNest2;




