import React, { Component, useContext, useState } from 'react'
import { Link } from "react-router-dom"
import * as K from '../Models/Constants'
import Cookies from 'universal-cookie';

function NavBar( props ) {

    const cookies = new Cookies();

    return (
        <nav className="navibar navbar navbar-expand-lg navbar-light bg-light text-uppercase">
            <div className='collapse navbar-collapse'>
                <span className="navbar-toggler-icon"></span>
                <ul className="navbar-nav mr-auto">
                    {K.MENUS.map((menu, index) => {
                        return (<div key={index} >
                            <li key={index} className="nav-item">
                                <Link className='nav-link' to={menu.href}>
                                    <span className='Section-Title'>{menu.title}</span>
                                </Link>
                            </li>

                        </div>)

                    })
                    }
                </ul>

            </div>
            <form className="form-inline my-2 my-lg-0">
                <a href="/login" className="btn btn-outline-info my-2 my-sm-0">
                    { cookies.get('username') === null
                    ? <span>LOGIN</span> 
                    : cookies.get('username') }
                </a>
            </form>
        </nav>
    )
}

export default NavBar