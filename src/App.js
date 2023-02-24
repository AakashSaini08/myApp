import React from 'react';

import './App.css';
import Dropdown from './components/Dropdown';
import { Route, Routes} from 'react-router-dom';
import Cities from './components/Cities';
import PageNotFound from './components/PageNotFound';
function App(){


  return (
 <div>
 
        <Routes>
          <Route path="/" element={<Dropdown/>}/>
          <Route path="*" element ={<PageNotFound/>}/>
          <Route path="/:selectedcity" element={<Cities/>} />
          
        </Routes>

        
 
 </div>

  );
}


export default App;
