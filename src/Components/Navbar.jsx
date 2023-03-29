import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (

      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
    
          <Typography variant="h6" color="inherit" component="div">
            Books
          </Typography>
          <Button id='nav' color='inherit' align='right'>
          <Link to ='/'>List</Link></Button>
          <Button id='nav' color='inherit' align='right'>
          <Link to ='/addstud'>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>

  )
}

export default Navbar
