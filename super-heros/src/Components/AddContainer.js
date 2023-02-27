import React, {useState } from 'react'

function AddContainer() {

    const [data,setData] = useState([]);

    const [num,setNum] = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [superHero,setSuperHero] = useState('');
    const [email,setEmail] = useState('');
    const [gender,setGender] = useState('');
    const [age,setAge] = useState('');

    const handleAdd =(e)=>{
        e.preventDefault();
        let list ={
            num,
            firstName,
            lastName,
            superHero,
            email,
            gender,
            age
        }
        setData([...data,list])
    }
  return (
    <div>
        <form autoComplete='off' onSubmit={handleAdd}>
            <label>#</label>
            <input type='text' required value={num} onChange={(e)=>setNum(e.target.value)}></input>

            <label>First Name</label>
            <input type='text' required value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>

            <label>Last Name</label>
            <input type='text' required value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>

            <label>Super Hero</label>
            <input type='text' required value={superHero} onChange={(e)=>setSuperHero(e.target.value)}></input>

            <label>Email</label>
            <input type='text' required value={email} onChange={(e)=>setEmail(e.target.value)}></input>

            <label>Gender</label>
            <input type='text' required value={gender} onChange={(e)=>setGender(e.target.value)}></input>

            <label>Age</label>
            <input type='text' required value={age} onChange={(e)=>setAge(e.target.value)}></input>
        </form>
    </div>
  )
}

export default AddContainer