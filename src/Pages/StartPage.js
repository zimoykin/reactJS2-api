import React, { useContext, useEffect, useState } from 'react'
import Context from '../Context'
import * as K from '../Models/Constants'
import PostsList from '../Pages/Posts'
import Error from '../Pages/Error'


function StartPage ( ) {

    const { setSearch } = useContext(Context)
    const [posts, setPosts] = React.useState( [] )
    const [error, setTextError] = React.useState ("")

    //npm install base-64
    const base64 = require('base-64');

    useEffect (() => {

        var headers = new Headers();
        headers.append("Authorization", "Basic " + base64.encode(K.USER + ":" + K.PASSWORD));

        fetch( K.ADDRESS + '/api/posts', {headers: headers})
        .then(response => response.json())
        .then( posts => {
          setTimeout(() => {
            setPosts(posts)
          }, K.TIMEOUT)
        })
        .catch(e => { 
            //setTextError(e)
        } )
      }, [])


    return  (

        <div>
            { posts.length ? <PostsList posts={posts}/> : <p>loading...</p> }
            { error !== "" ? <Error text={error}/> : null }
        </div>

    )
}

export default StartPage