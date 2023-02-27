import React from 'react'
import ViewData from './ViewData'
// import {Link} from 'react-router-dom';


function Navbar({data}) {
  return (
    <div>
    
    <nav>
        <button>Id</button>
        <button>First Name</button>
        <button>Last Name</button>
        <button>Superhero Name</button>
        <button>Email</button>
        <button>Gender</button>
        <button>Age</button>
    </nav>
      <ViewData data={data}/>
    </div>
  )
}

export default Navbar