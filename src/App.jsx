import React, { useState, useEffect } from "react";
import Education from './Components/Education';
import History from './Components/History';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router,  Link } from '@reach/router';
import './App.css';

function App() {


    const [showComponent, setShowComponent] = useState([]);


  const onClickHandler = (event) => {
    setShowComponent(event.target.data);
  }
  return (
    <div className="App">
      <h1>Welcome to Cory Anderson's Resume!</h1>
      <div>
        {/* <Education />
        <History />
        <Projects />
        <Skills /> */}
      </div>
      <Router>
        <ContactMe path="/" onClick={onClickHandler}/>
      </Router>
    </div>
  );
}

export default App;
