import React from "react";

function Fheader(){

    function changeEvent(e){
      e.preventDefault();
      console.log("Hello event handeling...")
    }
    return (
      <div className="Fheader">

        <h1>This is a Functional component</h1>
        <p>What is this beheaviour</p>
        <a href="https://www.youtube.com/watch?v=RuDsBrSczis" onClick={changeEvent}>Click Me </a> 
        
      </div>
    );
}
export default Fheader;