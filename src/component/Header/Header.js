import React from 'react'
import {FaBars, FaRegEnvelope, FaRegBell, FaRegFlag, FaCogs} from 'react-icons/fa';
import './Header.scss'
export default function Header ({name}) {
    return(
        <header className="header">
            <div className="logo">
                <b>Admin</b>
                {name}
            </div>
            <nav className="navbar">
                <a  href='#' role='button' className='bars-icon' data-toggle='push-menu'>
                    <FaBars />
                </a>
                <div className="navbar-menu">
                    <ul className="menu">
                        <li className = 'item-menu'>
                            <a href='#' role='button' className='item'>
                                <FaRegEnvelope />
                                <span className='lable lable-success'>4</span>
                            </a>
                        </li>
                        <li className = 'item-menu'>
                            <a href='#' role='button' className='item'>
                                <FaRegBell />
                                <span className='lable lable-warning'>10</span>
                            </a>
                        </li>
                        <li className = 'item-menu'>
                            <a href='#' role='button' className='item'>
                                <FaRegFlag />
                                <span className='lable lable-danger'>9</span>
                            </a>
                        </li>
                        <li className="user">
                            <a href='#' role='button'>
                                <img src='https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg'/>
                                <span className='user-name'>Alexander Pierce</span>
                            </a>
                        </li>
                        <li className='icon-cogs'>
                            <a href='#' role='button' className='item'>
                                <FaCogs />
                            </a>
                        </li> 
                    </ul>
                </div>
            </nav>
        </header>
    )

}

