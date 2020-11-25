import React from 'react'
import * as K from '../Models/Constants'

function PostsList( props ) {

    return (

        K.isMobile
            ?
            <div className="container-sm">
                <table>
                    {props.posts.map((post, index) => {
                        return <tr> <td>
                            <a href={"/posts/" + post.id}>

                                <div>
                                    <img className='mt-0 pt-1 d-block w-100' src={`${post.image}`} />
                                </div>
                                <div className='text-center bg-dark w-100'>
                                    <span className='text-light bg-dark text-uppercasse font-weight-light'> {(post.title)} </span>
                                </div>

                            </a>
                            <div style={{ backgroundColor: '#f0ece4' }}>
                                <p> {(post.description)} </p>
                            </div>

                        </td></tr>
                    })}
                </table>
            </div>
            :
            <div className="container bg-light">

                {props.posts.map((post, index) => {

                    return (
                        <div>  <div>
                            <div className="row">
                                {/* col */}
                                <div className="col-5">
                                    <div className='h-100 pr-3' sttyle={{ maxHeight: '200px' }}>
                                        <a href={"/posts/" + post.id}>  <div style={{ height: '250px', width: '450px', borderRadius: '10px', backgroundPosition: 'center', backgroundImage: `url(${post.image})` }} />  </a>
                                    </div>
                                </div>

                                {/* col */}
                                <div className="col-7">

                                    <div className="postHeader text-uppercase w-100">
                                        <a href={"/posts/" + post.id}>
                                            {(post.title)}
                                        </a>
                                    </div>

                                    <div className="postDescription font-weight-light w-100"> <p>
                                        {(post.description)}</p>
                                    </div>

                                </div>

                            </div>

                            <div className='row'>
                                <div style={{ valign: 'bottom' }} className="d-flex bg-light pb-3 pl-3 w-100">{post.tags.map((tag) => {
                                    return <div> <a style={{ color:'darkgray', textAlign: 'justify'}} href={"/search/tag/" + tag}> {"#" + tag} </a>  <span>&nbsp;</span>
                                    </div>
                                })}
                                </div>

                            </div>
                        </div> </div>


                    )

                })}
            </div>

     )
 }

                       
                                
                            

export default PostsList