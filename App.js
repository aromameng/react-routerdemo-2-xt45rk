import * as React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom';
import Layout from './Layout';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Switch>
          {this.props.routes.map((route, index) => (
            <Route component={route.component} path={route.path} />
          ))}
          <Redirect to="/home" />
        </Switch>
      </Layout>
    );
  }
}

export default App;
