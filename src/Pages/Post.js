import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as K from './Models/Constants'
import Loader from './Elements/Loader'
import Posts from '../Pages/Posts'

function Post ( ) {

    let { id } = useParams()

    const base64 = require('base-64');
    const [post, setPost] = useState( [] );
    const user = JSON.parse ( localStorage.getItem('auth') )
    const [firstrReq, setFirstRequest] = useState(false)

     var headers = new Headers();
     headers.append("Authorization", "Basic " + base64.encode(user.login + ":" + user.password));

    useEffect( () => {
        
        setFirstRequest(true)
        console.log(`setrequest:${firstrReq}`)

        fetch(K.ADDRESS + `/api/posts/${id}`, {headers: headers} )
            .then(response => response.json())
            .then(post => {
                setPost([post])
                console.log ( post )
                })
            .catch(e => {
                console.log(e)
            })
    }, [firstrReq])

    return (
        <div>
            if(firstrReq) {
             post.length ? <Posts posts={post}/> : <Loader />
            }
        </div>
    )

}


export default Post