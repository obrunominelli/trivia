import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';

class WillOpen extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default WillOpen;