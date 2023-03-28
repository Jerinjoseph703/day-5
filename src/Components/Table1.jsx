import {Button, Table,  TableBody,  TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Table1 = () => {
  var[students,setStudents]= useState([])
  useEffect(()=>{
    axios.get("http://localhost:3005/students")
    .then(response=>{
      setStudents(students=response.data)
      console.log(response.data)
    })
    .catch(error=>console.log(error))
  },[])

  const deletevalues = (id) =>{
    console.log("delete clickeed"+id)
    axios.delete("http://localhost:3005/students/"+id)
    .then((response)=>{
      console.log(response.idvalue);
      alert("sucessfully delected");
      window.location.reload(false);
    })
  }
  return (
    
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Grade</TableCell>
                    <TableCell>Delect</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              
              {students.map((value,index)=>{
                return <TableRow key={index}>
                  <TableCell>{value.id}</TableCell>
                  <TableCell>{value.name}</TableCell>
                  <TableCell>{value.grade}</TableCell>
                  <TableCell>
                    <Button color='error'  
                     onClick={()=>deletevalues(value.id)}>Delete</Button>
                  </TableCell>
                  </TableRow>
            
                  
              })}
            </TableBody>
        </Table>
      </TableContainer>
    
  )
}

export default Table1
