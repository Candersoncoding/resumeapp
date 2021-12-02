import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router,  Link } from '@reach/router';
import Main from "./Views/Main";
import './App.css';

function App() {


    const [showComponent, setShowComponent] = useState([]);


  
  return (
    <div className="App text-light">
      <header className="headingContainer">
        <h1>Welcome to Cory Anderson's Resume!</h1>
      </header>
      <Router>
        <Main path="/"/>
      </Router>
    </div>
  );
}

export default App;
