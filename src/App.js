import React, { useState, useContext } from 'react';
import './index.scss';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//PAGES
import MainLogo from './Logos/Logo'
import SecondLogo from './Logos/SecondLogo'
import HomePage from './Pages/HomePage'
import NavBar from './Pages/NavBar'
import NewPost from './Pages/NewPost'
import Post from './Pages/Post'
import Login from './Pages/Login'

import ReactDOM from 'react-dom'

import AuthContext from './Pages/Models/AuthContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect
} from "react-router-dom";
import PostsList from './Pages/Posts';



function App() {

const saveUser = (login, password) => {
  localStorage.setItem("auth", JSON.stringify({ login: login, password: password }))
}

  return (
    <AuthContext.Provider value={{saveUser}}> 
    <Router>
      <div>
        <NavBar />
        { !localStorage.getItem('auth') ? <Redirect from='/' to='/login' /> : '' }
        <Switch>
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/smthelse">
            <Smthelse />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
          <Route path="/posts/:id">
            <Post />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
    </AuthContext.Provider>
  );
}

export default App;

function Smthelse() { 
  return <h2> under constuction </h2>
}

function Contacts () {
  return <h2> under constuction </h2> 
}