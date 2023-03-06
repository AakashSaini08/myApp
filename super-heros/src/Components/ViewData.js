import React from 'react'
import Table from 'react-bootstrap/Table'

function ViewData ({ data,setData, data2, cnd, userData, setUserData, firstName }) {


  const idSortingChange = (sortField, sortOrder) => {
    const sorted = [...data];
    sorted.sort((a,b)=> {
        return (a.id.toString().localeCompare(b.id.toString(),"en",{
            numeric: true,
        }))*(sortOrder === 'asc'? 1 : -1)
    })
  
    setData(sorted);
  }

  const firstNameSortingChange = (sortField, sortOrder) => {
    const sorted = [...data];
    sorted.sort((a,b)=> {
        return (a.firstName.toString().localeCompare(b.firstName.toString(),"en",{
            numeric: true,
        }))*(sortOrder === 'asc'? 1 : -1)
    })
  
    setData(sorted);
}

const lastNameSortingChange = (sortField, sortOrder) => {
  const sorted = [...data];
  sorted.sort((a,b)=> {
      return (a.lastName.toString().localeCompare(b.lastName.toString(),"en",{
          numeric: true,
      }))*(sortOrder === 'asc'? 1 : -1)
  })

  setData(sorted);
}

const superheroSortingChange = (sortField, sortOrder) => {
  const sorted = [...data];
  sorted.sort((a,b)=> {
      return (a.superHero.toString().localeCompare(b.superHero.toString(),"en",{
          numeric: true,
      }))*(sortOrder === 'asc'? 1 : -1)
  })

  setData(sorted);
}

const emailSortingChange = (sortField, sortOrder) => {
  const sorted = [...data];
  sorted.sort((a,b)=> {
      return (a.email.toString().localeCompare(b.email.toString(),"en",{
          numeric: true,
      }))*(sortOrder === 'asc'? 1 : -1)
  })

  setData(sorted);
}

const genderSortingChange = (sortField, sortOrder) => {
  const sorted = [...data];
  sorted.sort((a,b)=> {
      return (a.gender.toString().localeCompare(b.gender.toString(),"en",{
          numeric: true,
      }))*(sortOrder === 'asc'? 1 : -1)
  })
  setData(sorted);
}

const ageSortingChange = (sortField, sortOrder) => {
  const sorted = [...data];
  sorted.sort((a,b)=> {
      return (a.age.toString().localeCompare(b.age.toString(),"en",{
          numeric: true,
      }))*(sortOrder === 'asc'? 1 : -1)
  })
  setData(sorted);
}
  return (

    <div className='view-container'>
         {data.length < 1 && <div>No Record Found</div>}
         {data.length > 0 &&
         <>
            <div className='table-responsive'>
    <Table striped bordered hover>
      <thead className='tableHead'>
        <tr className='tableRow' >
          <th>Id
          <button onClick={()=>idSortingChange(data,"asc")}>↑</button>
          <button onClick={()=>idSortingChange(data,"dsc")}>↓</button>
          </th>
          <th>First Name
          <button onClick={()=>firstNameSortingChange(data,"asc")}>↑</button>
          <button onClick={()=>firstNameSortingChange(data,"dsc")}>↓</button>
          </th>
          <th>Last Name
          <button onClick={()=>lastNameSortingChange(data,"asc")}>↑</button>
          <button onClick={()=>lastNameSortingChange(data,"dsc")}>↓</button>
          </th>
          <th>Superhero Name
          <button onClick={()=>superheroSortingChange(data,"asc")}>↑</button>
          <button onClick={()=>superheroSortingChange(data,"dsc")}>↓</button>
          </th>
          <th>Email
          <button onClick={()=>emailSortingChange(data,"asc")}>↑</button>
          <button onClick={()=>emailSortingChange(data,"dsc")}>↓</button>
          </th>
          <th>Gender
          <button onClick={()=>genderSortingChange(data,"asc")}>↑</button>
          <button onClick={()=>genderSortingChange(data,"dsc")}>↓</button>
          </th>
          <th>Age
          <button onClick={()=>ageSortingChange(data,"asc")}>↑</button>
          <button onClick={()=>ageSortingChange(data,"dsc")}>↓</button>
          </th>

        </tr>
      </thead>
      <tbody>
          {
            cnd
              ? data2.map(list => (
            <tr key={list.id }>
                <td >
                 <input name={data.id} type="checkbox" checked = { userData.includes(list.id)} onChange={(e) => {
                   if (e.target.checked) {
                     setUserData([...userData, list.id])
                   } else {
                     setUserData(userData.filter(item => item !== list.id))
                   }
                 }}/>
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
            <tr key={list.id}>
                <td >
                 <input type="checkbox" checked = { userData.includes(list.id)} onChange={(e) => {
                   if (e.target.checked) {
                     setUserData([...userData, list.id])
                   } else {
                     setUserData(userData.filter(item => item !== list.id))
                   }
                 }}/>
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
