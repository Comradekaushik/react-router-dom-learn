import React from 'react';
import { useOutletContext,Outlet } from 'react-router-dom';

function PracticeNest() {
    const valuepass = 89;
    const [valuepassedbyPracticeNest, setValuepassedbyPracticeNest] = React.useState("hithere 2");

return (
    <>
        {/* how to use useOutletContext */}
        <div>
            PracticeNest

        </div>
        <Outlet context={valuepass}/>
        {/* <Outlet context={[valuepassedbyPracticeNest, setValuepassedbyPracticeNest]}/> */}

    </>
    
)
}

// how to use useOutletContext

export default PracticeNest;









