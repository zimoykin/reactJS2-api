import React, { useEffect, useState } from 'react'
import * as K from '../Pages/Models/Constants'
import PostsList from '../Pages/Lists/PostsList'
import Loader from './Elements/Loader'
import AlertError from './Elements/ErrorAlert'
import { Redirect } from "react-router-dom";
import App from '../App'
import { useParams } from 'react-router-dom'
import Cookies from 'universal-cookie';
import Dropzone from './Elements/DropZone'
import jwt from 'jsonwebtoken'


function Post ( props ) {

  let { id } = useParams()

  const [posts, setPosts] = React.useState([]);
  const [errorText, setErrorText] = React.useState('');
  const [callEffect, setCallEffect] = React.useState(1)

  const cookies = new Cookies();

  useEffect(() => {

    if ( callEffect === 0 ) { return }

    const token = cookies.get('accessToken')
    if (token === null) {
      return
    }

    var headers = new Headers();
    headers.append("Authorization", "Bearer " + token);

    const decodedToken = jwt.decode(token)
    if (decodedToken === null) {
      getNewAccessToken(cookies)
      return
    }

    if (decodedToken.exp > (new Date().getTime() + 1) / 1000) {
      console.log(true, 'token is not expired')
    } else { 
      getNewAccessToken(cookies)
      return
    }


    fetch(`${K.ADDRESS}/api/posts/${id}`, { headers: headers })
      .then (response => { 
        if(response.ok) { 
          return response.json() 
        } else  {
          alert (response.statusText)
        }
      })
      .then(posts => {
        setTimeout(() => {
          setPosts([posts])
          setErrorText('')
        }, K.TIMEOUT)
      })
      .catch(e => {
        console.log(e)
        setErrorText(e.message)
        setTimeout(() => {
          console.log(`call: ${callEffect}`)
          setCallEffect(callEffect + 1)
        }, K.TIMEOUT * 3)
      })
   }, [callEffect])


  function getNewAccessToken (cookies) {

    console.log ("getNewAccessToken")

    const refreshToken = cookies.get ('refreshToken')

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({
        refreshToken: refreshToken
      })
    };
   
    fetch(`${K.ADDRESS}/api/users/refresh`, requestOptions)
    .then(response => response.json())
    .then(user => {
      props.saveUser(user.accessToken, user.refreshToken, user.username, user.image)
      setCallEffect(callEffect+1)
    })
    .catch(e => {
      console.log(e.message)
      props.saveUser('', '', '')
    })
  
  }


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

export default Post

