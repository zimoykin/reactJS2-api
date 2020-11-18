import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as K from './Models/Constants'
import Loader from './Elements/Loader'
import Posts from '../Pages/Lists/PostsList'
import AlertError from './Elements/ErrorAlert'
import Cookies from 'universal-cookie';

function Post() {

    let { id } = useParams()
    const cookies = new Cookies();
    const token = cookies.get ('accessToken')

    const [textError, setTextError] = React.useState( '' )

    var headers = new Headers();
    headers.append("Authorization", `Bearer ${token}`);
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