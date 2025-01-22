import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'


import Main from "./main"
import Dashboard from "./dashboard"
import AccountCreate from "./create"
import Market from "./market"
import Bank from "./bank"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exct path="/" element={ <Main />} />
          <Route exct path="/dashboard" element={ <Dashboard />} />
          <Route exct path="/create" element={ <AccountCreate />} />
          <Route exct path="/market" element={ <Market />} />
          <Route exct path="/bank" element={ <Bank />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
