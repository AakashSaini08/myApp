import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import ViewData from './ViewData'
// import { useForm } from 'react-hook-form'

// eslint-disable-next-line no-unused-vars

function AddData () {
  const myData = () => {
    const finalData = localStorage.getItem('data')
    if (finalData) {
      return JSON.parse(finalData)
    } else {
      return []
    }
  }
  const [show, setShow] = useState(false)
  const [userData, setUserData] = useState([])
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [data, setData] = useState(myData())
  const [data2, setData2] = useState([])
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [superHero, setSuperHero] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [query, setQuery] = useState('')
  const [cnd, setCnd] = useState(false)
  const [msgf, setMsgf] = useState('')
  const [msgl, setMsgl] = useState('')
  const [msge, setMsge] = useState('')
  const [msga, setMsga] = useState('')
  const [msgs, setMsgs] = useState('')


  const handleAdd = (e) => {
    e.preventDefault()
    const list = {
      id: (data.length && Number(Number(data.at(-1).id) + 1)) || 1,
      firstName,
      lastName,
      superHero,
      email,
      gender,
      age
    }
    setData([...data, list])
    setFirstName('')
    setLastName('')
    setSuperHero('')
    setEmail('')
    setGender('')
    setAge('')
    handleClose(true)
    window.location.reload(false)
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
    setData(data)
  }, [data])

  const filteredData = (e) => {
    e.preventDefault()
    setQuery(e.target.value.toLowerCase())
    let arr = []
    arr = data.filter((item) => {
      return (item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.superHero.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.email.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.gender.toLowerCase().includes(e.target.value.toLowerCase()) ||
      item.age.toLowerCase().includes(e.target.value.toLowerCase()))
    }
    )
    setData2(arr)
    setCnd(true)
  }

  function handleDelete () {
    setData(data.filter((val) => !userData.includes(val.id)))
    setUserData([])
  }

  const handleFirstName = (e) => {
    e.preventDefault()
    
    setFirstName(e.target.value)
    const regEx = /^[a-z ,.'-]+$/i
    if (regEx.test(firstName)) {
      setMsgf('First name is valid')
    }
    else if(!regEx.test(firstName) || firstName === '')
    {
      setMsgf('First name is not valid')
    }
  }

  const handleLastName = (e) => {
    e.preventDefault()
    setLastName(e.target.value)
    const regEx = /^[a-z ,.'-]+$/i
    if (regEx.test(lastName)) {
      setMsgl('Last name is valid')
    }
    else if(!regEx.test(lastName) || lastName === '')
    {
      setMsgl('Last name is not valid')
    }
  }

  const handleSuperHero = (e) => {
    e.preventDefault()
    setSuperHero(e.target.value)
      setMsgs('Super hero name is valid')

  }

  const handleEmail= (e) => {
    e.preventDefault()
    setEmail(e.target.value)
    const regEx = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i
    if (regEx.test(email)) {
      setMsge('Email is valid')
    }
    else if(!regEx.test(email) || email === '')
    {
      setMsge('Email is not valid')
    }
  }

  const handleAge= (e) => {
    e.preventDefault()
    setAge(e.target.value)
    const regEx =/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)+$/i
    if (regEx.test(age)) {
      setMsga('Age is valid')
    }
    else if (!regEx.test(age) || age === '')
    {
      setMsga('Age is not valid')
    }
  }

  return (
    <>

    <div className='heading'>
        <button className='delete' onClick={handleDelete} >Delete</button>
        <button className='add' onClick={handleShow} >Add Record</button>
        <input type="text"
          name="item"
          className='searchicon'
          autoComplete='off'
          placeholder="🔍"
          onChange={filteredData}
          value={query}
           />
    </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form autoComplete='off' >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>first Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="first name"
                onChange={handleFirstName}
                value ={firstName}
                required="required"
              />
              <p>
              {msgf}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="last name"
                onChange={handleLastName}
                value ={lastName}
                required="required"
              />
              <p>{msgl}</p>
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Super Hero name</Form.Label>
              <Form.Control
                type="text"
                placeholder="super hero"
                onChange={handleSuperHero}
                value ={superHero}
                required="required"
              />
              <p>{msgs}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={handleEmail}
                value ={email}
                required="required"
              />
              <p>{msge}</p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <label htmlFor="Gender"> Gender </label>
              <select name="gender"
                onChange={(e) => setGender(e.target.value)}
                value ={gender}
                required="required">
              <option value="select" >--Select--</option>
              <option value="male" >Male</option>
              <option value="female" >Female</option>
              <option value="other" >Other</option>
              </select>
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="00"
                onChange={handleAge}
                value ={age}
                required="required"
              />
              <p>{msga}</p>
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add Data
          </Button>
        </Modal.Footer>
      </Modal>
        <ViewData data={data} setData={setData} data2={data2} cnd={cnd} userData={userData} setUserData={setUserData} firstName={firstName}/>
    </>
  )
}

export default AddData
