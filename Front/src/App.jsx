import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Account from './components/Account';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Landingpage from './components/Landingpage';



function App() {
  return (
    <BrowserRouter>
              <Routes>   
                      <Route path="/account" element={<Account/>}/>
                      <Route path="/login" element={<Login/>}/> 
                      <Route path="/register"  element={<Register/>}/>
                      <Route path="/"  element={<Landingpage/>}/>        
              </Routes>
          </BrowserRouter>
  );
}

export default App;