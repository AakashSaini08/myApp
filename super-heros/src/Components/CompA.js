import React, {useState, createContext } from 'react'
import CompB from './CompB';

export const Globalcontext = createContext();
function CompA() {
    const [color,setColor] = useState("red")
    const getColor =(item) =>{
        setColor(item)
    }
  return (
    <Globalcontext.Provider value={{mycolor:color , getColor}}>
        <div>
            <CompB/>
        </div>
    </Globalcontext.Provider>
  )
}

export default CompA