import React from 'react'
import * as K from '../Models/Constants'

function PostsList(props) {

    return (

        K.isMobile
            ?
            <div className="container-sm">
                <table>
                    {props.posts.map((post, index) => {
                        return <tr> <td>
                                    <div>
                                        <img className='mt-0 pt-1 d-block w-100' src={`${post.image}`} />
                                    </div>
                                    <div className='text-center bg-dark w-100'>
                                        <a className='text-light bg-dark text-uppercasse font-weight-light' href={"/posts/" + post.id}> {(post.title)} </a>
                                    </div>
                                    <div style={{backgroundColor: '#f0ece4'}}>
                                    <p> {(post.description)} </p>
                                    </div>

                                </td></tr>
                    })}
                </table>
            </div>
            :
            <div className="container h-100">
                <table>{props.posts.map((post, index) => {
                    return <tr><td>

                        <div><table>
                            <tr>
                                <td>
                                    <div className='h-100'>
                                        <img className='mt-0 pt-0 d-block w-100 pr-1' src={`${post.image}`} />
                                    </div>
                                </td>

                                <td>
                                    <div className='h-100'>
                                        <div className="postHeader text-uppercase">
                                            <a href={"/posts/" + post.id}>
                                                {(post.title)}
                                            </a>
                                        </div>
                                        <div className="postDescription font-weight-light"> <p>
                                            {(post.description)}</p>
                                        </div>
                                    </div>
                                </td>


                            </tr>

                            <tr><td>
                                <div style={{ valign: 'bottom' }} className="d-flex bg-light pb-3">{post.tags.map((tag) => {
                                    return <div> <a href={"/search/tag/" + tag}> {"#" + tag} </a>  <span>&nbsp;</span> </div>
                                })}
                                </div>
                            </td></tr>
                        </table>
                        </div>
                    </td>
                    </tr>
                })}
                </table>
            </div>
    )

}

export default PostsList