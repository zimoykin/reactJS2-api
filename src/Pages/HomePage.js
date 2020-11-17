import React, { useEffect, useState } from 'react'
import * as K from '../Pages/Models/Constants'
import PostsList from '../Pages/Posts'
import Loader from './Elements/Loader'


function HomePage ( ) {

    const [posts, setPosts] = React.useState( [] );


    //npm install base-64
    const base64 = require('base-64');

    useEffect (() => {

        var headers = new Headers();
        const user = JSON.parse(localStorage.getItem('auth'))
        headers.append("Authorization", "Basic " + base64.encode(user.login + ":" + user.password));

        fetch( K.ADDRESS + '/api/posts', {headers: headers})
        .then(response => response.json())
        .then( posts => {
          setTimeout(() => {
            setPosts(posts)
          }, K.TIMEOUT)
        })
        .catch( e => { 
          console.log(e)
        } )
      }, [])


    return  (

        <div>
            { posts.length ? <PostsList posts={posts}/> : <Loader /> }
        </div>

    )
}

export default HomePage

