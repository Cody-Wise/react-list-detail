import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PresidentPage from './PresidentPage';
import PresidentDetail from './PresidentDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <PresidentPage />
          </Route>
          <Route exact path="/presidents/:id">
            <PresidentDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
