import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import ViewData from './ViewData'

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
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(data))
  }, [data])

  const filteredData = (e) => {
    e.preventDefault()
    setQuery(e.target.value.toLowerCase())
    let arr = []
    arr = data.filter((item) => {
      console.log(item)
      return (item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) || item.lastName.toLowerCase().includes(e.target.value.toLowerCase()) || item.superHero.toLowerCase().includes(e.target.value.toLowerCase()) || item.email.toLowerCase().includes(e.target.value.toLowerCase()) || item.gender.toLowerCase().includes(e.target.value.toLowerCase()) || item.age.toLowerCase().includes(e.target.value.toLowerCase()))
    }
    )
    setData2(arr)
    setCnd(true)
  }
  return (
    <>

    <div className='heading'>
        <button className='delete' >Delete</button>
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete='off' onSubmit={handleAdd}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>first Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="first name"
                onChange={(e) => setFirstName(e.target.value)}
                value ={firstName}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="last name"
                onChange={(e) => setLastName(e.target.value)}
                value ={lastName}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Super Hero name</Form.Label>
              <Form.Control
                type="text"
                placeholder="super hero"
                onChange={(e) => setSuperHero(e.target.value)}
                value ={superHero}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
                value ={email}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Gender</Form.Label>
              <Form.Control
                type="text"
                placeholder="M/F"
                onChange={(e) => setGender(e.target.value)}
                value ={gender}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="00"
                onChange={(e) => setAge(e.target.value)}
                value ={age}
                required
              />
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
        <ViewData data={data} data2={data2} cnd={cnd} />
    </>
  )
}

export default AddData
