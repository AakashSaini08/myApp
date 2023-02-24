import React from "react";

class Game extends React.Component{

    constructor(){
        super();
        this.state = {
            msg:"Would you like to play game"
        }
    }

    football(){
        this.setState({
            msg:"Thanks for playing "
        })
    }

render(){
    return (
        <div>
            <h1> {this.state.msg}</h1>
            <button onClick={() => {this.football()}}>Play</button>
        </div>
        
    );
        
    
}











    // function playGame(){
    //     alert("Thanks for playing")
    // }
    
    // return(
    //     <div>
    //         <button onClick={playGame}>Click me</button>
    //     </div>
    // );

    
   
}
export default Game;