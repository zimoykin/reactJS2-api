import React from 'react'

function PostsList ( props ) {

    return (
        <div className="container">
        <table> { props.posts.map ( (post, index) => {
                return <tr><td> 
                     <div className="postHeader text-uppercase"><h3>{( post.title )} </h3> </div>
                     <div className="postDescription font-weight-light"> <p> {( post.description )}</p> </div>
                    </td></tr>
            })}
        </table>
        </div>
    )


}
export default PostsList