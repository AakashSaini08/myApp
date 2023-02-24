import React, { Component } from 'react'

export default class Task extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        
        userInput:"",
         list:[]
      }
    }

    updateInput(value){
        this.setState({
            userInput:value
        });
    }

    // addItem(){
    //     if(this.state.userInput !== ''){
    //         const userInput ={
    //             value: this.state.userInput
    //         };
    //         const list =[...this.state.list];
    //         list.push(userInput);
    //     }
    // }

  render() 
  
  
  {
    return (
      <div>
        <h2 style={{color:"red",background:"black",textAlign:"center"}}>TODO LIST</h2>
        
        <input type="text" name="item" className='list' placeholder='add some items...'/>
        <button onClick={()=>this.updateInput }>Add</button>
        
        

      </div>
    )
  }
}
