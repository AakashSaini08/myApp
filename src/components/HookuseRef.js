import React, { useEffect, useRef } from 'react'

function HookuseRef() {
    // const myRef = useRef();
    const firstName = useRef();
    const lastName = useRef();

    useEffect(()=>{
        console.log(firstName);
        console.log(lastName)
        firstName.current.focus();
    })

    const handleEvent= ()=>{

        
        
        // myRef.current.style.color = "blue";
        // myRef.current.innerHTML =" Thank you"
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Full name :", firstName.current.value, lastName.current.value)
    }

  return (
    <div>

        <form onSubmit={handleSubmit}>

            <label htmlFor='firstName'>First Name</label>
            <input type="text" ref={firstName} placeholder="Enter your first name"/>
            <br/><br/>
            <label htmlFor='lastName'>Last Name</label>
            <input type="text" ref={lastName} placeholder="Enter your last name"/>
            <br/><br/>
            <input type="submit" value="submit"/>
        </form>

        {/* <h1 ref={myRef}>This is a Heading</h1>
        <button onClick={handleEvent} >Click Me</button> */}
    </div>
  )
}

export default HookuseRef