import React, { useState } from 'react'
import List from './List'; 


function TodoList() {

    const [inputList, setinputList] = useState("");
    const [items,setItems] =useState([]);

   

    const itemEvent = (event)=>{
        setinputList(event.target.value);
    };

    const listOfItem =()=>{
        
        if(inputList=== "") return;
        
            setItems((oldItems)=>{
                return [...oldItems,inputList]
            })
            setinputList("");
    };

    const deleteItems=(id)=>{
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !== id;
            })
        })
    }
    let handleKeyDown = (event)=>{
        if(event.key === "Enter"){
            deleteItems(index);
        }
        }
    

  return (
    <div>
    <h1 style={{color:"red",background:"black"}}>TODO LIST</h1>
        <input type="text" onChange={itemEvent} value={inputList} placeholder="Add some items" required />
        <button onClick={listOfItem}>Add</button>
        <ol>
        
            {items.map((itemval,index)=>{
                return <List key={index} id={index} text = {itemval}
                onSelect={()=>deleteItems(index)}
                
                

                />
            })}
        </ol>
        
    </div>
    
  )
}

export default TodoList


