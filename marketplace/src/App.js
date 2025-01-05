import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Main from "./main"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exct path="/" element={ <Main />} />
          <Route exct path="/pcreate" element={ <PCreate />} />
          <Route exct path="/dcreate" element={ <DCreate />} />
          <Route exct path="/dashboard" element={ <Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
