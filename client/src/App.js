import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home/Home"
import Login from "./components/Login"
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
          <div>
            <Route exact path={["/","/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
          </div>
      </Router>
    </div>
  );
}

export default App;
