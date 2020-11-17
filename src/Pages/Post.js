import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as K from './Models/Constants'
import Loader from './Elements/Loader'
import Posts from '../Pages/Posts'
import AlertError from './Elements/ErrorAlert'

function Post() {

    let { id } = useParams()

    const [textError, setTextError] = React.useState( '' )

    const base64 = require('base-64');
    const user = JSON.parse(localStorage.getItem('auth'))

    var headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode(user.login + ":" + user.password));
    headers.append('Content-Type', 'application/json')

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        fetch(K.ADDRESS + `/api/posts/${id}/`, { headers: headers })
            .then(response => {
                if (!response.ok) {
                    throw Error("Network Request Failed");
                }
                return response
            })
            .then(post => post.json())
            .then(post => {
                setTimeout(() => {
                    setPosts([post])
                }, K.TIMEOUT)
            })
            .catch(e => {
                console.log(e)
            })
    }, [])

    return (
        <div>
             <AlertError textError={textError}/>
            { posts.length ? <Posts posts={posts} /> : <Loader />}
        </div>
    )

}


export default Post