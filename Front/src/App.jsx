import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Account from './components/Account';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { RequireAuth } from './components/Authcontextprovider';



function App() {
  return (
    <BrowserRouter>
              <Routes> 
                  
                     


                      <Route path="/login" element={<Login/>}/> 
                      <Route path="/register"  element={<Register/>}/> 
<Route  element={<RequireAuth allowedRoles={2}/>} />
                      <Route path="/account" element={<Account/>}/>
                         
              </Routes>
          </BrowserRouter>
  );
}

export default App;