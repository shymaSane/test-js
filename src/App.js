import React, { Component } from 'react';
import {Provider} from './Context';
import CSVReader from 'react-csv-reader'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/layouts/Home'


class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Home />
        </div>
      </Provider>
    );
  }
}

export default App;
