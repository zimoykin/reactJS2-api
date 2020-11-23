import React, { useState, useContext, useEffect } from 'react'
import * as K from './Models/Constants'
import AuthContext from './Models/AuthContext'
import { Redirect } from 'react-router-dom';
import Cookies from 'universal-cookie';

function Login() {

  const cookie = new Cookies();

  const { saveUser } = useContext(AuthContext)

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [redirect, setRedirect] = useState(false)

  function onChangePassword(event) {
    setPassword(event.target.value)
  }

  function onChangeLogin(event) {
    setLogin(event.target.value)
  }


  function SendLogin() {

    const base64 = require('base-64');

    var headers = new Headers();
    headers.append("Authorization", "Basic " + base64.encode(login + ":" + password));
    headers.append('Content-Type', 'application/json')

    //alert ('here1')
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
      //alert ('here2')
      saveUser(user.accessToken, user.refreshToken, user.username, user.image)
      setRedirect(true)
    })
    .catch(e => {
      console.log(e.message)
    })
  }

  function Logoff() {
    alert('logoff')

    cookie.remove('accessToken')
    cookie.remove('refreshToken')
    cookie.remove('username')

    saveUser('', '', '', '')
    setRedirect(true)
  }

  return (

    <div>
      {redirect === true
        ?
        <Redirect to="/home" />
        :
        !cookie.get('accessToken')
          ?
          <UnauthorizedUser onChangeLogin={onChangeLogin} onChangePassword={onChangePassword} SendLogin={SendLogin} />
          :
          <AuthorizedUser Logoff={Logoff} cookie={cookie} />
      }
    </div>
  )

}

export default Login


function UnauthorizedUser(props) {

  return (

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card">
            <div className="card-body">
              <h3 className="panel-title"> Login </h3>

              <div className="form-group">
                <span > Username or email </span>
                <input type="username" className="form-control" onChange={props.onChangeLogin} required />
              </div>

              <div className="form-group">
                <span > Password </span>
                <input type="password" name="password" className="form-control" onChange={props.onChangePassword} required />
              </div>

              <div className="form-group">
                <button
                  type='submit'
                  className="btn btn-block btn-success pointer"
                  value="login"
                  onClick={props.SendLogin}
                >LOGIN</button>
              </div>

            </div>
          </div>
        </div>
      </div>

  )
}

function AuthorizedUser(props) {

  const username = props.cookie.get('username')

  if (username === null) {
    return (null)
  }

  return (
    <div>
      <div className='container'>
        <span>  {`HI ${username}`} </span>
      </div>
      <div className='container'>
        <div className="form-group">
          <input className="btn btn-block btn-danger" value="logoff" onClick={props.Logoff} />
        </div>
      </div>
    </div>
  )
}