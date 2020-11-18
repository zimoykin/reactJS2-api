import React, { useEffect, useState } from 'react'
import * as K from '../Pages/Models/Constants'
import PostsList from '../Pages/Lists/PostsList'
import Loader from './Elements/Loader'
import AlertError from './Elements/ErrorAlert'
import { Redirect } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { Prev } from 'react-bootstrap/esm/PageItem'
import Cookies from 'universal-cookie';


function SearchPage() {

  const [posts, setPosts] = React.useState([]);
  const [errorText, setErrorText] = React.useState('');
  const [callEffect, setCallEffect] = React.useState (0)

  const cookies = new Cookies();

  let { tag } = useParams()

  useEffect( () => {

    var headers = new Headers();
    const token = cookies.get ('accessToken')
    if (token === null) {
      return
    }
    headers.append("Authorization", "Bearer " + token);

    fetch(`${K.ADDRESS}/api/search/tag/${tag}`, { headers: headers })
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

export default SearchPage

