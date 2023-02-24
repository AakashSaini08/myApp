import React, { useEffect , useState} from 'react'
import { useNavigate ,useParams} from 'react-router-dom'
import axios from "axios"
import UseEffect from './UseEffect';

function Cities() {
    const navigate = useNavigate();

    const[city,setCity] = useState([]);
    const[input,setInput] =useState("");
   const {selectedcity}=useParams()
   const [err,setErr]=useState()

  useEffect(()=>{
    let data=selectedcity;
    axios.post("https://countriesnow.space/api/v0.1/countries/cities",{
      country:selectedcity
    }).then((result)=>{
      setCity(result.data.data);
    }).catch(err=>{
      if(err.response.status==500){
        setErr("--Error--")
      }
    })     
  },[])

  const filteredData=(e)=>{
    e.preventDefault();
    let input =e.target.value.toLowerCase();
    setInput(input)
    let arr=[];
     arr =city.filter((item)=>{
        if(input === '') return item;
        else{
          return item.toLowerCase().includes(input)
        }
    })
setCity(arr);
  }
  
  return (
    <div>
    
        <h2 >City List</h2>
        
        <input type="text"
          placeholder='Search here'
          onChange={filteredData}
          value={input}
        />
        <button style={{borderColor:"black",margin:10}} onClick={()=>navigate(-1)}>Go Back</button>
        <ul>
          {city.map(val=><li>{val}</li>)}
        </ul>
        <h1>{err}</h1>
        
    </div>
  )
}

export default Cities