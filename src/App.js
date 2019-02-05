import React, { Component } from 'react';
import {Provider} from './Context';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/layouts/Home';
import Tables from './components/dashboard/Tables'


class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/api/tables" component={Tables} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
