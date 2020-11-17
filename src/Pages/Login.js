import React, { useState, useContext } from 'react'
import * as K from './Models/Constants'
import AuthContext from './Models/AuthContext'
import { Redirect } from 'react-router-dom';


function Login() {

  const { saveUser } = useContext(AuthContext)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [redirect, setRedirect] = useState (false)

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function onChangeLogin(event) {
    setLogin(event.target.value)
  }


  function SendLogin() {

    console.log(login)

    const base64 = require('base-64');

    var headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode(login + ":" + password));
    headers.append('Content-Type', 'application/json')

    const requestOptions = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        login: login,
        password: password
      })
    };

    fetch(`${K.ADDRESS}/api/users/login`, requestOptions)
      .then(response => response.json())
      .then(user => {
        console.log(user)

        saveUser(login, password)

        setRedirect(true)

      })
      .catch(e => {
        console.log(e.message)
      })

  }


  return (

    <div>
      {redirect===true 
      ? 
      <Redirect to="/home" />
      : 
      
      

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card">
            <div className="card-body">
              <h3 className="panel-title"> Login </h3>

              <div className="form-group">
                <span > Username or email </span>
                <input type="username" className="form-control" onChange={onChangeLogin} required />
              </div>

              <div className="form-group">
                <span > Password </span>
                <input type="password" name="password" className="form-control" onChange={onChangePassword} required />
              </div>

              <div className="form-group">
                <input className="btn btn-block btn-success" value="login" onClick={SendLogin} />
              </div>

            </div>
          </div>
        </div>
      </div>
    }
    </div>
  )

}

export default Login