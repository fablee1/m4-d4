import WarningSign from './components/WarningSign';

import {Row, Col, Button} from 'react-bootstrap'

import Fantasy from './data/fantasy.json'
import History from './data/history.json'
import Horror from './data/horror.json'
import Romance from './data/romance.json'
import Scifi from './data/scifi.json'

import BookList from './components/BookList'
import React, { useState } from 'react'
import './App.css';

const App = () =>  {

  const [categoryName, setCategoryName] = useState(null)
  const [category, setCategory] = useState(null)

  const categories = {'Fantasy': Fantasy, 'History': History, 'Horror': Horror, 'Romance': Romance, 'Scifi': Scifi}

  return (
    <div className="App">
      <WarningSign text="HELLO" />
      <Row className="mb-5 d-flex justify-content-center">
        {
          Object.keys(categories).map((cat, i) => {   
            return <Col key={i} xs={6} sm={4} md={2} className="d-flex justify-content-center px-4 mb-2">
                <Button variant="success" className="w-100" onClick={() => {setCategoryName(cat); setCategory(categories[cat])}}>{cat}</Button>
            </Col>
          })
        }
      </Row>
      <Row className="d-flex justify-content-center mb-4 text-center">
        {
            categoryName ? <h2>{categoryName}</h2> : <h2>Select A Category To View Books!</h2>
        }
      </Row>
      {
        category && <BookList books={category} />
      }
    </div>
  );
}

export default App;
