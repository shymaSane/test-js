import React, { Component } from 'react';
import {Provider} from './Context';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/layouts/Home';
import EmailTables from './components/dashboard/EmailTables';
import Tables from './components/dashboard/Tables'


class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/api" component={Home} />
              <Route exact path="/api/emailtables" component={EmailTables} />
              <Route exact path="/api/alltables" component={Tables} />
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
