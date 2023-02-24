import React,{useState,useEffect} from "react";


class Cheader extends React.Component{
    constructor(props) {
        super(props)
      
        this.state = {
           name:"Aakash"
        }
      }
      
    render(){
        console.log("render");
        return (
            
            <div>
            
           <h2>{this.state.name}</h2>
            </div>
           
        );
            
    }
}
export default Cheader; 

// function Cheader() {

//     const[count,setCount] = useState(0);

//     useEffect(()=>{
//         console.log(count);
//     },[count])

//   return (
//     <div>
//         <button onClick={()=>setCount(count+1)}>Click Me</button>
//         <input ></input>
        
//         <h2>You clicked {count} times</h2>
//     </div>
//   )
// }

// export default Cheader