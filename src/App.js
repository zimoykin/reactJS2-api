import React, { useState, useContext } from 'react';
import './index.scss';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Cookies from 'universal-cookie';

//PAGES
import HomePage from './Pages/HomePage'
import NavBar from './Pages/Elements/NavBar'
import NewPost from './Pages/NewPostPage'
import Login from './Pages/LoginPage'
import Post from './Pages/PostPage'
import Country from './Pages/CountryPage'
import Search from './Pages/SearchPage'

import AuthContext from './Pages/Models/AuthContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";



function App() {

const cookies = new Cookies();

 const saveUser = (acceessToken, refreshToken, username) => {

  setIsLogged(cookies.get('accessToken') !== null)

   if (acceessToken !== '' ) {

      cookies.set('accessToken', acceessToken, { path: '/' });
      cookies.set('refreshToken', refreshToken, { path: '/' });
      cookies.set('username', username, { path: '/' });

      setIsLogged(cookies.get('accessToken') !== null)
   } 

}
 const [isLogged, setIsLogged] = React.useState ( 
   cookies.get('accessToken') !== null
  )

  return (
    <AuthContext.Provider value={{saveUser}}> 
    <Router>
      <div>
        <NavBar isLogged={isLogged}/>
        { !cookies.get('accessToken') ? <Redirect from='/' to='/login' /> : '' }
        <Switch>
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/country">
            <Country />
          </Route>
          <Route path="/search/tag/:tag">
            <Search />
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