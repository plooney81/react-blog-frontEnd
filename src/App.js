import './App.css';
import {useState, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter, NavLink, Redirect, Route} from 'react-router-dom';

import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
