import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Main from "./main"
import Dashboard from "./dashboard"
import AccountCreate from "./create"

import MyContext from './myContext';
import { useState } from 'react';


function App() {
  const [globalVarUsername, setGlobalVarUsername] = useState("");
  const [globalVarPassword, setGlobalVarPassword] = useState("");
  const [globalVarEmail, setGlobalVarEmail] = useState("");

  return (
    <MyContext.Provider value={{globalVarUsername, globalVarPassword, globalVarEmail, setGlobalVarEmail, setGlobalVarUsername, setGlobalVarPassword}}>
      <Router>
        <div className="App">
          <Routes>
            <Route exct path="/" element={ <Main />} />
            <Route exct path="/dashboard" element={ <Dashboard />} />
            <Route exct path="/create" element={ <AccountCreate />} />
          </Routes>
        </div>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
