import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';

function Dropdown() {
    const[state,setState] = useState('');
    const [country,setCountry]=useState([]);
    const [city,setCity]=useState([]);

    const navigate = useNavigate();

    useEffect(()=>{

        var values;
        fetch('https://countriesnow.space/api/v0.1/countries/capital')
        .then(function(res){
            return res.json();
        }).then(function(json){
            values = json;
            setCountry(values.data)
        })

    },[]);

  return (

    <div style={{background:'black'}}>
    <h2 style={{margin:30,color:"white"}}>Select Your Country</h2>
        <select style={{margin : 10}} value={state} onChange={(e)=>setState(e.target.value)}>
        

        <option default>--Select Country--</option>
        {
            country.map((obj,key)=> <option> {obj.name} </option>)
        }
        </select>
       
        <h2 style={{margin:10,color:"white"}}>{state}</h2>
        <button style={{borderColor:"black",margin:10}} onClick={()=>navigate(`${state}`) }>Next</button>
        
    </div>
  )
}

export default Dropdown