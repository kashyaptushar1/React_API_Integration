
import {Link , Routes ,Route } from 'react-router-dom'
import Home from './Components/Home';
import Show from './Components/Show';
import Services from './Components/Services';

function App() {
  
  
  return (
    <div className="p-5">
      <nav className='flex justify-center gap-5' >
        <Link to="/" >Home</Link>
        <Link to="/Show" >Show</Link>
        <Link to="/Services" >Services</Link>
        
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/Show" element={<Show/>} ></Route>
        <Route path="/Services" element={<Services/>} ></Route>
      </Routes>
     
    </div>
  );
}

export default App;
