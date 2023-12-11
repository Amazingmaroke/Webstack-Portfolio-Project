import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Account from './components/Account';
import Login from './components/auth/Login';
import Register from './components/auth/Register';



function App() {
  return (
    <BrowserRouter>
              <Switch>   
                      <Route path="/account" component={Account}/>
                      <Route path="/login" component={Login}/> 
                      <Route path="/register"  component={Register}/>        
              </Switch>
          </BrowserRouter>
  );
}

export default App;