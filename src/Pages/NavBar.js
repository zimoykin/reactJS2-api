import React, { Component } from 'react'

import { map } from 'underscore'
import { Link } from "react-router-dom"

import * as K from '../Models/Constants'



function NavBar() {
    return (
        <nav className="navibar navbar navbar-expand-lg navbar-light bg-light text-uppercase">
        <div className='collapse navbar-collapse'>
        <span className="navbar-toggler-icon"></span>
            <ul className="navbar-nav mr-auto">
                {K.MENUS.map( (menu, index) => {
                    return( <div>   
                             <li className="nav-item" key={index}>
                                <Link className='nav-link' to={menu.href}>
                                    <span className='Section-Title'>{menu.title}</span>
                                </Link>
                             </li>
                             
                         </div> )

                })
                }
            </ul>
            
        </div>
             <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    )
}

export default NavBar