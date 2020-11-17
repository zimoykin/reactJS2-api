import React, { useEffect, useState } from 'react'
import * as K from '../Pages/Models/Constants'
import PostsList from '../Pages/Posts'
import Loader from './Elements/Loader'
import AlertError from './Elements/ErrorAlert'
import { Redirect } from "react-router-dom";


function HomePage() {

  const [posts, setPosts] = React.useState([]);
  const [errorText, setErrorText] = React.useState('');


  //npm install base-64
  const base64 = require('base-64');

  useEffect(() => {

    var headers = new Headers();
    const user = JSON.parse(localStorage.getItem('auth'))
    if (user === null) {
      return
    }
    headers.append("Authorization", "Basic " + base64.encode(user.login + ":" + user.password));

    fetch(K.ADDRESS + '/api/posts', { headers: headers })
      .then(response => response.json())
      .then(posts => {
        setTimeout(() => {
          setPosts(posts)
        }, K.TIMEOUT)
      })
      .catch(e => {
        console.log(e)
        setErrorText(e.message)
      })
  }, [])


  return (
    !localStorage.getItem('auth')
      ?
      <Redirect to="/login" />
      :
      <div>
        {posts.length ? <PostsList posts={posts} /> : <Loader />}

        <AlertError textError={errorText} />
      </div>

  )
}

export default HomePage

