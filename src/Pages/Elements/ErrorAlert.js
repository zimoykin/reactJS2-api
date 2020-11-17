import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'


function AlertError ( props ) {

    return (
        props.textError 
        ?  <div className='container'> 
                <div className="alert alert-danger" role="alert">
                    {props.textError}
                </div>  
            </div>
        : null
    )   
}
export default AlertError