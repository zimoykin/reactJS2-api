import React, {useCallback, useEffect} from 'react'
import { useDropzone } from 'react-dropzone'
import * as K from '../Models/Constants'
import Cookies from 'universal-cookie';
import { head } from 'underscore';

export default function Dropzone( props ) {

    const cookies = new Cookies();

    const divStyle = {
        color: 'SeaGreen',
        textAlign: 'center',
        backgroundColor: 'lightgray',
        minHeight: '100px',
        minWidth: '450px'
        //backgroundImage: 'url(' + imgUrl + ')',
      };


  const onDrop = useCallback(acceptedFiles => {


    const token = cookies.get ('accessToken')


    const data = new FormData()
    data.append('file', acceptedFiles)

    var headers = new Headers();
    headers.append("Authorization", `Bearer ${token}` );

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: acceptedFiles
    };

        fetch(`${K.ADDRESS}/api/posts/uploads/${props.postid}`, {method: "POST", headers: headers, body: data})
        .then(response => response.json())
        .then( post => {
            setTimeout( ()=> {

                //redirect to post

            }, K.TIMEOUT)
        })
        .catch ( e => {
            alert (e.message)
        })


  }, [])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div style={divStyle} {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive 
        ?
          <span> Uploading! </span> 
        : <span> drag and drop your files here! </span> 
        
      }
    </div>
  )
}