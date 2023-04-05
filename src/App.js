import React, { useState } from "react"
import './App.css';

function App()
{
    const [list, setlist] = useState([]);
    const [value, setvalue]= useState("");

    function onChangeHandler(event){
        setvalue(event.target.value)
    }

    function onClickHandler(event){
        console.log(event.target)
        setlist(l=>[...l,value])

    }

    function onDeleteHandler(index){
       console.log(list.filter((item,ind)=> index!==ind))
        setlist(prevList => prevList.filter((item,ind)=>index!==ind))
    }

    function onEdittoggle(index){
        
    }

    return <>    
    <h1>Notes App</h1>
    <input onChange= {onChangeHandler} value={value} placeholder="Enter Note"/>
    <button onClick= {onClickHandler}  type='button'>Add Note</button>    
    {list.map((listItem,index) => <p key={listItem}>{listItem}
    <button onClick={()=>onDeleteHandler(index)}>Delete</button>
    <button onClick={()=> onEdittoggle(index)}> Edit</button></p>)}
    
    </>
    
}

export default App 