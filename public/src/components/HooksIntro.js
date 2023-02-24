import React,{useState,useEffect} from 'react'

function HooksIntro() {

    const[count,changeCount] = useState(0); 

    useEffect(() => {
        
        document.title = `You clicked ${count} times`;
        
      });

  return (
    <div>
        <p>You clicked this {count} times</p>
        <button onClick={()=> changeCount(count+1)}>Click Me</button>
    </div>
  )
}

export default HooksIntro