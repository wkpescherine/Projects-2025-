import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react';

import Title from "./title"
import Viewport from "./viewport"
import MyContext from './myContext';

function App() {
  const [globalActionPort, setGlobalActionPort] = useState("Home");
  const [globalStatBonus, setGlobalStatBonus] = useState([0,0,0,0,0,0])
  
  return (
    <MyContext.Provider value={{globalActionPort,setGlobalActionPort}}>
      <Router>
        <div className="App">
          <Routes>
            <Route exct path="/" element={ <Title />} />
            <Route exct path="/viewport" element={ <Viewport />} />
          </Routes>
        </div>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
