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
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

function App() {
  return (
    <div className="App">
     
      <h1 className={styles.success}>Success</h1>
      <h1 className="error">Error</h1>
      <Inline />
      {/* <Stylesheet  primary={true} /> */}
      {/* <NameList /> */}
      {/* <UserGreeting /> */}
      {/* <ParentComponent />      */}
      {/* <FunctionClick />
      <ClassClick /> */}

      {/* <EventBind/> */}

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
