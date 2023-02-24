import React from 'react'
import Game from './Game';
import Fheader from './Fheader';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
} from "react-router-dom";
import Cheader from './Cheader';


function Routing() {
  return (
    <Router>
    
        <nav>
            <ul>
                <li>
                    <Link to="/">Cheader</Link>
                </li>
                <li>
                    <Link to="/Game">Game</Link>
                </li>
                <li>
                    <Link to="/Fheader">Fheader</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Cheader />}/>
            <Route path="/Game" element={<Game />}/>
            <Route path="/Fheader" element={<Fheader />}/>
        </Routes>


    </Router>
  )
}

// function Home(){
//     return <h2>This is a Home Page</h2>
// }
// function About(){
//     return <h2>Home</h2>
// }
// function User(){
//     return <h2>Home</h2>
// }

export default Routing