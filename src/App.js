import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import Fantasy from './data/fantasy.json'
import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <WarningSign text="HELLO" />
      <MyBadge text='Fantasy' variant='danger'/>
      {/* {
        Fantasy.map(book => <SingleBook title={book.title} img={book.img} />)
      } */}
    </div>
  );
}

export default App;
