import WarningSign from './components/WarningSign';
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'
import Fantasy from './data/fantasy.json'
import BookList from './components/BookList'
import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <WarningSign text="HELLO" />
      <BookList books={Fantasy} />
    </div>
  );
}

export default App;
