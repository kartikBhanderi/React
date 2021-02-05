import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import { Component } from 'react';
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

function App() {
  return (
    <div className="App">
     
      <FunctionClick />
      <ClassClick />

      {/* <Counter/> */}
     
      {/* <Message/> */}
     
      {/* <Greet name="kartik" heroName="batman">
        <p>Hey! I am children</p>
      </Greet>
      <Greet name="yash" heroName="superman">
        <button>Action</button>
      </Greet> */}

      {/* <Welcome name="kartik" heroName="batman"></Welcome>
      <Welcome name="yash" heroName="superman"></Welcome> */}
    
    </div>
  );
}

export default App;
