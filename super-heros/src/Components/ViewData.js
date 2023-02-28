import React from 'react'
import Table from 'react-bootstrap/Table'

function ViewData ({ data, data2, cnd }) {
  return (

    <div className='view-container'>
         {data.length < 1 && <div>No Record Found</div>}
         {data.length > 0 &&
         <>
            <div className='table-responsive'>
    <Table striped bordered hover>
      <thead className='tableHead'>
        <tr className='tableRow' >
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Superhero Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Age</th>

        </tr>
      </thead>
      <tbody>
          {
            cnd
              ? data2.map(list => (
            <tr key={list}>
                <td >
                 <input label ={data.id} name={data.id} type="checkbox"></input>
                 { list.id }
                 </td>
                <td>{list.firstName}</td>
                <td>{list.lastName}</td>
                <td>{list.superHero}</td>
                <td>{list.email}</td>
                <td>{list.gender}</td>
                <td>{list.age}</td>
            </tr>)
              )
              : data.map(list => (
            <tr key={list}>
                <td >
                 <input type="checkbox"></input>
                 { list.id }
                 </td>
                <td>{list.firstName}</td>
                <td>{list.lastName}</td>
                <td>{list.superHero}</td>
                <td>{list.email}</td>
                <td>{list.gender}</td>
                <td>{list.age}</td>
            </tr>
              ))
           }
      </tbody>
    </Table>
            </div>
         </>
         }
    </div>
  )
}

export default ViewData
