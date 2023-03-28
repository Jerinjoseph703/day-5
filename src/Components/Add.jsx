import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Add = () => {
    var [input,setInput] = useState({
        name:''
    })

     const inputHandler = (e)=>{
        const{name,value} = e.target
        setInput({...input,[name]:value})
     }


     const readValues =()=>{
    console.log("clicked")
    axios.post("http://localhost:3005/students",input)
    .then(response=>{
        alert("success")
    })
    
    .catch(err=>console.log(err))   
     }
  return (
    <div>

        <br></br>
      <TextField label='Name' name='name' varient='outlined'
      value={input.name} onChange={inputHandler}/>

<br></br>
<br></br>
      <TextField label='Grade' name='grade' varient='outlined'
      value={input.grade} onChange={inputHandler}/> <br />
      <br></br>
      <Button varient='contained'onClick={readValues}
      color='success'>Submit</Button>

    </div>

  )
}

export default Add
