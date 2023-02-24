import React, { createContext} from 'react'
import CompB from './CompB';

    export const myName = createContext();
    export const subject = createContext();

function CompA() {

  return (
    <div>
        <myName.Provider value={"Computer"}  >
        <subject.Provider value={"Science"}>
          <CompB/>
        </subject.Provider>
        </myName.Provider>
    </div>
  )
}

export default CompA