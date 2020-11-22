import React, { Component, useContext, useState } from 'react'
import { Link } from "react-router-dom"
import * as K from '../Models/Constants'
import Cookies from 'universal-cookie'
import MenuPage from '../MenuPage';
import '../../Sidebar.css'
import '../../slideMenu.css'

function NavBar(props) {

    const cookies = new Cookies();

    const [menyTouched, setMenuTouched] = useState(false)

    return (
        K.isMobile
            ?
            
            <div className="">
                    <MenuPage pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
                <div className="App" id="outer-container">
                    <div style={{ height: '36px' }} className=" w-100 bg-dark d-flex justify-content-end pr-3">
                        <a href="/login" className="text-info text-uppercase">
                            {cookies.get('username') === null
                                ? 'LOGIN'
                                : cookies.get('username')}
                        </a>
                    </div>
                </div>
            </div>

            :
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
                        {cookies.get('username') === null
                            ? <span>LOGIN</span>
                            : cookies.get('username')}
                    </a>
                </form>
            </nav>
    )
}

export default NavBar