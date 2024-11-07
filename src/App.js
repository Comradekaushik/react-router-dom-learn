
import './App.css';
import About from './components/About';
import Profile from './components/Profile';
import Navbar from './components/Navbar';
import Vans from './components/Vans';
import Vanview from './components/Vanview';
import Layout from './components/Layout';
import Nest1 from './components/Nest1';
import Nest2 from './components/Nest2';
import IndexComp from './IndexComp';
import PracticeNest from './components/PracticeNest';
import PracticeNest2 from './components/PracticeNest2';
import Missiles from './components/Missiles';

import { BrowserRouter,Routes, Route,Link } from 'react-router-dom';

function App() {
  return (
    

    <BrowserRouter>


          

          {/* <Navbar/> */}

        
        
          <Routes>
            {/* <Route path='/' element={<Navbar/>}/> */}

            <Route path='/' element={<Navbar/>}>
                <Route index element={<IndexComp/>}/>

                <Route path='/about' element={<About/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/vans' element={<Vans/>}/>
                <Route path = '/van/:id' element = {<Vanview/>}/>
                <Route path='/dashboard' element={<Layout/>}>
                    {/* here Layout will be rendered in both Nest1 and Nest2 */}
                    <Route path='nest1' element={<Nest1/>}/>   {/*Relative paths*/} 
                    <Route path='/dashboard/nest2' element={<Nest2/>}/>
                </Route>

                <Route path='mysection' element={<PracticeNest/>}>
                   <Route path='nested1' element={<PracticeNest2/>}></Route>
                
                </Route>

                <Route path='missiles' element={<Missiles/>}>
                    
                
                
                </Route>




            </Route>
            
          </Routes>
        
    </BrowserRouter>
  
  );
}

export default App;
