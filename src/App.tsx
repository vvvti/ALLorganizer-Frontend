import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './routes/Routes'


export const App = () => {
  return (
    <Router>
    <div className="App">
      <h1>ALLorganizer frontend</h1>
      <Routes />
    </div>
    </Router>
  );
}
