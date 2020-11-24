import React, { useCallback, useEffect, useState } from 'react';
import { push as Menu } from 'react-burger-menu';
import * as K from './Models/Constants'
import Cookies from 'universal-cookie';
import Axios from 'axios';

//public/mickeyLogo.png'


export default props => {

  const cookies = new Cookies();

  var username = cookies.get('username')
  if (username === null) {
    username = 'LOGIN'
  }

  var userImage = cookies.get('image')

  //change image
  function handleChange(files) {

    var file = files[0]

    alert(file)

    const data = new FormData()
    data.append('file', file)

    Axios.post(`${K.ADDRESS}/api/users/avatar`, data)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(e => {
        alert(e)
      })
  }


  return (

    <div>
      <Menu>
        <div>

        </div>
        <label>
          <img className='mt-0 pt-1 d-block w-100 rounded-circle' src={`${cookies.get('image')}`} />

          <input type="file" name='file' style={{ display: "none" }} onChange={(e) => handleChange(e.target.files)} />
        </label>
        <a href='/login'> <span> {username} </span> </a>


        <hr />
        {K.MENUS.map((itemMenu, index) => {
          return (
            <a className="menu-item" href={itemMenu.href}>
              {itemMenu.title}
            </a>
          )

        })}
      </Menu>
    </div>
  );
};