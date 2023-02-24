import React from 'react';

import Cheader from './components/Cheader';
import './App.css';
import HooksIntro from './components/HooksIntro';
import TodoList from './components/TodoList';
import Task from './components/Task';
import UseEffect from './components/UseEffect';
import CompA from './components/CompA';
import HookuseRef from './components/HookuseRef';
import HookuseReducer from './components/HookuseReducer';
import Dropdown from './components/Dropdown';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes,useNavigate } from 'react-router-dom';
import Cities from './components/Cities';
import PageNotFound from './components/PageNotFound';
function App(){
  
  const navigate = useNavigate();

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
