import React, { useState } from 'react';
import './index.scss';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLogo from './Logos/Logo'
import SecondLogo from './Logos/SecondLogo'
import HomePage from './Pages/HomePage'
import NavBar from './Pages/NavBar'
import NewPost from './Pages/NewPost'

import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import PostsList from './Pages/Posts';



function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/smthelse">
            <Smthelse />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

function Smthelse() { 
  return <h2> under constuction </h2>
}

function Contacts () {
  return <h2> under constuction </h2> 
}