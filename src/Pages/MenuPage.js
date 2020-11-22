import React from 'react';
import { push as Menu } from 'react-burger-menu';
import * as K from './Models/Constants'


export default props => {
  return (
    <Menu>
    { K.MENUS.map( (itemMenu, index) => {
        return (
            <a className="menu-item" href={itemMenu.href}>
                {itemMenu.title}
            </a>
        )
        
    })}
    </Menu>
  );
};