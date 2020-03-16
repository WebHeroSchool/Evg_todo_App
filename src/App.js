import React from 'react';
import logo from './logo.svg';
import './App.css';
import {count, length} from './number/number';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
          fontSize: 46,
          color: 'yellow'
        }}> App by Evgeny_M </h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
          fontSize: 40,
          color: "salmon",
        }}>
          Здесь вы видете результат "count * length = <strong style={{color: 'darkgoldenrod'}}> {count * length}" </strong>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
