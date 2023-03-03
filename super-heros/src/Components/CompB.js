import React, { useContext } from 'react'
import { Globalcontext } from './CompA'
function CompB() {
    const {mycolor, getColor} =useContext(Globalcontext);
    
    const color ="green"
     return (
        <div>
        <h2 style={{color:mycolor}}>this is mycolor</h2>
        <button onClick ={()=>getColor(color)}>Click Me</button>
    </div>
  )
}

export default CompB