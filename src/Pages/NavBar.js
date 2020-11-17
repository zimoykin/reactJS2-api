import React, { Component } from 'react'
import { map } from 'underscore'
import { Link } from "react-router-dom"
import * as K from '../Pages/Models/Constants'

function NavBar() {
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
                    { !localStorage.getItem('auth') 
                    ? <span>LOGIN</span> 
                    : JSON.parse(localStorage.getItem('auth')).login }
                </a>
            </form>
        </nav>
    )
}

export default NavBar