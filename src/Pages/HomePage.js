import React, { useEffect, useState } from 'react'
import * as K from '../Pages/Models/Constants'
import PostsList from '../Pages/Lists/PostsList'
import Loader from './Elements/Loader'
import AlertError from './Elements/ErrorAlert'
import { Redirect } from "react-router-dom";
import App from '../App'
import { Prev } from 'react-bootstrap/esm/PageItem'
import Cookies from 'universal-cookie';


function HomePage() {

  const [posts, setPosts] = React.useState([]);
  const [errorText, setErrorText] = React.useState('');
  const [callEffect, setCallEffect] = React.useState (0)

  const cookies = new Cookies();

  useEffect( () => {

    var headers = new Headers();
    const token = cookies.get ('accessToken')
    if (token === null) {
      return
    }
    headers.append("Authorization", "Bearer " + token);

    fetch(K.ADDRESS + '/api/posts', { headers: headers })
      .then(response => response.json())
      .then(posts => {
        setTimeout(() => {
          setPosts(posts)
          setErrorText('')
        }, K.TIMEOUT)
      })
      .catch(e => {
        console.log(e)
        setErrorText(e.message)
        setTimeout(() => {
              console.log (`call: ${callEffect}`)
              setCallEffect (callEffect + 1)
        }, K.TIMEOUT * 3)
      })
  }, [callEffect])


  return (
    !cookies.get('accessToken')
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

