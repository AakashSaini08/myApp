import React, { useReducer } from 'react'


const initalValue =0;
const reducer =(state,action)=>{
    switch(action){
        case 'increment':
        return state + 1;
        
        case 'decrement':
        return state-1;

        case 'reset':
        return initalValue;

        default:
        return state
    }
}

function HookuseReducer() {

    const[count, dispatch] = useReducer(reducer, initalValue);

  return (
    <>
    <div>Count-{count}</div>
    <button onClick={()=>dispatch("increment")}>Increment</button>
    <button onClick={()=>dispatch("decrement")}>Decrement</button>
    <button onClick={()=>dispatch("reset")}>reset</button>
    </>
  )
}

export default HookuseReducer