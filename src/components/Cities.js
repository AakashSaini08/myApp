

import React, { useEffect , useState} from 'react'
import { useNavigate ,useParams} from 'react-router-dom'
import axios from "axios"
import UseEffect from './UseEffect';

function Cities() {
    const navigate = useNavigate();

    const[city,setCity] = useState([]);
    const[filteredCities,setFilteredCities] = useState([]);
    const[input,setInput] =useState("");
   const {selectedcity}=useParams();
   const [err,setErr]=useState()

  useEffect(()=>{
    let data=selectedcity;
    axios.post("https://countriesnow.space/api/v0.1/countries/cities",{
      country:selectedcity
    }).then((result)=>{
      setCity(result.data.data);
      setFilteredCities(result.data.data);
    }).catch(err=>{
      if(err.response.status==500){
        setErr("--Error--")
      }
    })     
  },[])

 useEffect(()=>{
 
      let inputLocal =input;
      let arr=[];
        arr =city.filter((item)=>{
            return item.toLowerCase().includes(inputLocal)
      })
      setFilteredCities(arr);
    },[input])

  
  return (
    <div>
        <h2 >City List</h2>
        <input type="text"
          placeholder='Search here'
          onChange={(e)=>setInput(e.target.value)}
          value={input}
        />
        <button style={{borderColor:"black",margin:10}} onClick={()=>navigate(-1)}>Go Back</button>
        <ul>
          {filteredCities.map(val=><li>{val}</li>)}
        </ul>
        <h1>{err}</h1>
        
    </div>
  )
}

export default Cities
