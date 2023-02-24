import React, { useEffect, useState } from 'react'

function UseEffect() {

    let[count,setCount] = useState(0);
    let [name,setName] = useState("Aakash");
    const increment = ()=>{
        setCount(count+1)
    }

    useEffect(()=>{
        console.log("Count UseEffect Encountered");
    },[count])

    useEffect(()=>{
        console.log("Name UseEffect Encountered");
    },[name])

  return (
    <div>
        <h2>{count}</h2>
        <h2>{name}</h2>
        <button onClick={()=> setCount(count+1)}>Increment</button>
        <button onClick={()=> setCount(count-1 )}>Decrement</button>
        <button onClick={()=> setName(name ='Saini')}>Update</button>
    </div>
  )
}

export default UseEffect