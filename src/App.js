import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import View from './Components/View';
import { Table } from '@mui/material';
import Table1 from './Components/Table1';


function App() {
  return (
     <div className="App">
        <Navbar/>
       <Routes>
         <Route path='/' element={<Table1/>}></Route>
         <Route path='/addstud' element={<Add/>}></Route>
       </Routes>
  
    </div>
  );
}

export default App;
