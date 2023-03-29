import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Add from './Add'

const Table1 = () => {

  var [update, setUpdate] = useState(false)
  var [selected, setSelected] = useState([])
  var [students, setStudents] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3005/students")
      .then(response => {
        setStudents(students = response.data)
        console.log(response.data)
      })
      .catch(error => console.log(error))
  }, [])

  const updateValue = (value) => {
    setSelected(value);
    setUpdate(true);
  }

  const deletevalues = (id) => {
    console.log("delete clickeed" + id)
    axios.delete("http://localhost:3005/students/" + id)
      .then((response) => {
        console.log(response.idvalue);
        alert("sucessfully delected");
        window.location.reload(false);
      })
  }
  var finalJSX = <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Grade</TableCell>
          <TableCell>Delect</TableCell>
          <TableCell>Update</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>

        {students.map((value, index) => {
          return <TableRow key={index}>
            <TableCell>{value.id}</TableCell>
            <TableCell>{value.name}</TableCell>
            <TableCell>{value.grade}</TableCell>
            <TableCell>
              <Button color='error'
                onClick={() => deletevalues(value.id)}>Delete</Button>
            </TableCell>
            <TableCell>
              <Button color='success'
                onClick={() => updateValue(value)}>Update</Button>
            </TableCell>
          </TableRow>


        })
        }
      </TableBody>
    </Table>
  </TableContainer>

  if (update)
    finalJSX = <Add data={selected} method="put" />


  return (

    <div>
      {finalJSX}
    </div>

  )
}

export default Table1
