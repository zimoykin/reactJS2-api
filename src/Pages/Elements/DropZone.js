import React, { useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import * as K from '../Models/Constants'
import Cookies from 'universal-cookie';
import { head } from 'underscore';
import axios from 'axios';  

export default function Dropzone(props) {

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

    const token = cookies.get('accessToken')

    alert(acceptedFiles)

    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.readAsArrayBuffer(file)

      const data = new FormData()
      data.append('file', file)

      axios.post(`${K.ADDRESS}/api/posts/uploads/${props.postid}`, data, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          })
        .then ( 
          
         )
        .catch(e => {
          alert(e.message)
        })

    })

  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

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