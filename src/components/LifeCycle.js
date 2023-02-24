import React, { Component } from 'react'

export class LifeCycle extends Component {

    constructor(){
        super()
            this.state ={
                quantity:0
            }
           // console.log("Lifecycle : constructor");
    }

    componentDidMount(){
        console.log("Lifecycle: componentDidMount")
    }

    updatecart=()=>{
        this.setState({
            quantity:this.state.quantity+1
        });
    }
    componentDidUpdate(prevProps,prevState){
        console.log("Lifecycle: componentDidUpdate")
    }


  render() {
    // console.log("Lifecycle: render");
    return (
      <div>
        <h2>Cart: {this.state.quantity}</h2>
        <button onClick={this.updatecart}>Click Me</button>
      </div>
    )
  }
}

export default LifeCycle
