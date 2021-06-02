import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'
import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <WarningSign text="HELLO" />
      <MyBadge text='Fantasy' variant='danger'/>
    </div>
  );
}

export default App;
