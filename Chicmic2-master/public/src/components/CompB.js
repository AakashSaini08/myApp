import React from 'react'
import {myName,subject} from './CompA'
import { useContext } from 'react'



function CompB() {

  const myWord = useContext(myName);
  const mySubject = useContext(subject);

  return (
    <div>
        <h2>{myWord}</h2>
        <h2>{mySubject}</h2>
    </div>
  )
}

export default CompB