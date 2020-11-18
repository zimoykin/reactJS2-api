import React from 'react'

function PostsList ( props ) {

    return (
        <div className="container h-100">
        <table>{ props.posts.map ( (post, index) => {
                return <tr><td> 
                    <div className='h-100'> 
                        <img className='mt-0 pt-0 d-block w-100 pr-1' src={`${post.image}` }/>
                     </div>
                     </td>
                     <td>
                     <div key={index} className="postHeader text-uppercase">
                            <a key={index} href={ "/posts/" + post.id }>
                                {( post.title )} 
                            </a> 
                        </div>
                     <div key={index} className="postDescription font-weight-light"> <p key={index}> 
                        {( post.description )}</p> 
                     </div>
                    <div key={index} className="d-flex bg-light">{ post.tags.map ( (tag) => { 
                            return <a key={index} href={"/search/tag/"+tag}> { "#" + tag} &nbsp; </a> 
                          }) }
                    </div>
                    </td></tr>
            })}
        </table>
        </div>
    )


}
export default PostsList