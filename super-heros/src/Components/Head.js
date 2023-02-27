import React from 'react'
//import AddContainer from './AddContainer'
import Navbar from './Navbar'


function Head() {
  return (
    <div>
    <h2 className='superTitle'>SUPER HEROS</h2>
        <div className='heading'>
        <button className='delete'>Delete</button>
        <button className='add' >Add Record</button>
        <input type="text" name="item" className='searchicon' placeholder="🔍" />
        </div>
        <Navbar/>
    </div>
  )
}

export default Head