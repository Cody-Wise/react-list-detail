import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PresidentPage from './PresidentPage';
import PresidentDetail from './PresidentDetail';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/about">
            <PresidentPage />
          </Route>
          <Route exact path="/users">
            <PresidentDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
