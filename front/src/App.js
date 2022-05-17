import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Allusers from './component/Allusers';
import Home from './component/Home';

function App() {
  return (
    <div className="App">
     <Routes >
         
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<Allusers/>} />

         
         
          
          
         
        </Routes>
    </div>
  );
}

export default App;
