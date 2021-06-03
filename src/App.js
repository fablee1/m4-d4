import WarningSign from './components/WarningSign';

import {Row, Col, Button} from 'react-bootstrap'

import Fantasy from './data/fantasy.json'
import History from './data/history.json'
import Horror from './data/horror.json'
import Romance from './data/romance.json'
import Scifi from './data/scifi.json'

import BookList from './components/BookList'
import React from 'react'
import './App.css';

class App extends React.Component {

  state = {
    selectedCatName: null,
    selectedCategory: null
}

  categories = {'Fantasy': Fantasy, 'History': History, 'Horror': Horror, 'Romance': Romance, 'Scifi': Scifi}

  render() {
    return (
      <div className="App">
        <WarningSign text="HELLO" />
        <Row className="mb-5 d-flex justify-content-center">
          {
            Object.keys(this.categories).map((cat, i) => {   
              return <Col key={i} xs={6} sm={4} md={2} className="d-flex justify-content-center px-4 mb-2">
                  <Button variant="success" className="w-100" onClick={() => this.setState({selectedCategory: this.categories[cat], selectedCatName: cat})}>{cat}</Button>
              </Col>
            })
          }
        </Row>
        <Row className="d-flex justify-content-center mb-4 text-center">
          {
              this.state.selectedCatName ? <h2>{this.state.selectedCatName}</h2> : <h2>Select A Category To View Books!</h2>
          }
        </Row>
        {
          this.state.selectedCategory ? <BookList books={this.state.selectedCategory} /> : null
        }
      </div>
    );
  }
}

export default App;
