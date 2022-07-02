import './Reset.css';
import SingUp from './Log-in_Sign-up/SignUp';
import LogIn from './Log-in_Sign-up/LogIn';
import Estrato from './Wallet/Estrato';
import FinancialMovement from './Wallet/FinancialMovement';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react';
import UserContext from './contexts/UserContext';
import { useState } from 'react';


function App() {

  const [token, setToken] = useState("leca")
  return (
    <>
            <UserContext.Provider value={{token, setToken}}>
        <BrowserRouter>
          
          <Routes>

              <Route path="/" element={<LogIn/>}/>
              <Route path="/SingUP" element={<SingUp/>}/>
              <Route path="/Estrato" element={<Estrato/>}/>
              <Route path="/Movementacao/:type" element={<FinancialMovement/>}/>

          </Routes>
        </BrowserRouter>
            </UserContext.Provider>

    </>
  );
}

export default App;
