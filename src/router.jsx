import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import NotFound from './components/NotFound'; // página 404, se precisar

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="*" component={NotFound} /> {/* Rota 404, se precisar */}
      </Switch>
    </Router>
  );
};

export default Routes;