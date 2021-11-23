import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes
} from 'react-router-dom';

import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          </Routes>
          <section className="container">
          <switch>
          <Routes>
            <Route exact path='register' element={<Register />} />
          </Routes>
          <Routes>
            <Route exact path='login' element={<Login />} />
          </Routes>
            </switch>  
          </section>

      </Fragment>
    </Router>
  );
};

export default App;
