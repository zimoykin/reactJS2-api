import React from 'react';
import { push as Menu } from 'react-burger-menu';
import * as K from './Models/Constants'
import Cookies from 'universal-cookie';

//public/mickeyLogo.png'


export default props => {

  const cookies = new Cookies();

  var username = cookies.get('username')
  if (username === null) {
    username = 'LOGIN'
  }

  var userImage = cookies.get ('image')



  return (

    <div>
      <Menu>
      <div>
        
      </div>
      <image style={{ minHeight: '100px' }}className='img-fluid img-thumbnail' src={userImage}> </image>
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