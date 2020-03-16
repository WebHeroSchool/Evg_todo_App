import React from 'react';
import logo from './logo.svg';
import './App.css';

const count = '->Это результат вывода переменной count!<-';
const logic = true;
const trueword = false;

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
          color: 'cyan'
        }}>
          {count}
        </p>
        <p> {25} </p>
        <p> {1024 - 524} </p>
        <p style={{color: 'brown'}}> {logic && 'logic operation'} </p>
        <p style={{color: 'green'}}> {trueword ? 'Если вы увидели это сообщение, то правда Ваша!' : 'Похоже кто-то изменил параметр на сладкую ложь'} </p>
        <p> Вывод "undefined:__" {undefined} , "null:__" {null}, "false:__" {false}, "true:__" {true}. </p>
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
