import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom';
import routes from './route';
import './style.css';

class Com extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <Switch>
          {routes.map(route => {
            return (
              <Route
                path={route.path}
                render={props => (
                  <route.component {...props} routes={route.routes} />
                )}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

render(<Com />, document.getElementById('root'));
