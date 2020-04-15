import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CreateTabel } from './components/createTable';
import { InputCount } from './components/inputCount';

function App() {
  console.log("Пурум")
  return (
    
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p> */}
        {console.log("dd")}
        <InputCount/>
      
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
