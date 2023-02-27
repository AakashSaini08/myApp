import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Navbar from './Navbar';
// import ViewData from './ViewData';


const myData =()=>{
    const finalData =localStorage.getItem('data');
    if(finalData){
        return JSON.parse(finalData);
    }else{
        return [];
    }
}


function AddData() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [data,setData] = useState(myData());

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
        setData([...data,list]);
        setNum('');
        setFirstName('');
        setLastName('');
        setSuperHero('');
        setEmail('');
        setGender('');
        setAge('');
    }

    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(data));
    },[data])


  return (
    <>
    <div className='heading'>
        <button className='delete'>Delete</button>
        <button className='add' onClick={handleShow} >Add Record</button>
        <input type="text" name="item" className='searchicon' placeholder="🔍" />
    </div>
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete='off' onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Id</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                onChange={(e)=>setNum(e.target.value)}
                value ={num}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>first Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="first name"
                onChange={(e)=>setFirstName(e.target.value)}
                value ={firstName}
               
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="last name"
                onChange={(e)=>setLastName(e.target.value)}
                value ={lastName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Super Hero name</Form.Label>
              <Form.Control
                type="text"
                placeholder="super hero"
                onChange={(e)=>setSuperHero(e.target.value)}
                value ={superHero}
                
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e)=>setEmail(e.target.value)}
                value ={email}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="M/F"
                onChange={(e)=>setGender(e.target.value)}
                value ={gender}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="00"
                onChange={(e)=>setAge(e.target.value)}
                value ={age}
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd }>
            Save Changes
          </Button>

        

        </Modal.Footer>
      </Modal>
        <Navbar data={data}/>
       
      
    </>
  )
}

export default AddData