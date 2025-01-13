import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Title from "./title"
import Viewport from "./viewport"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exct path="/" element={ <Title />} />
          <Route exct path="/viewport" element={ <Viewport />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
