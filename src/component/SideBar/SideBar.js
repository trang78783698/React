import React from 'react'
import {
    FaSearch, FaTh, FaChartPie, FaEdit,
    FaCalendarAlt, FaFolder, FaBook
} from 'react-icons/fa/index';
import {
    AiFillDashboard
} from 'react-icons/ai/index';
import {
    IoChevronBack
} from 'react-icons/io5/index';
import {
     VscFiles
} from 'react-icons/vsc/index';
import {
MdComputer
} from 'react-icons/md/index';
import {
    BsTable,

} from 'react-icons/bs/index';
import {
    HiOutlineMail
} from 'react-icons/hi/index';
import {
    RiShareForwardFill
} from 'react-icons/ri/index';
import './SideBar.scss'

export default function SideBar() {
    return (
        <section className='sidebar'>
            <div className='user-panel'>
                <div >
                    <img src='https://adminlte.io/themes/AdminLTE/dist/img/user2-160x160.jpg'/>
                </div>
                <div className='info'>
                    <p>Alexander Pierce</p>
                    <a href='#' role='button'>
                        <span className='icon-online'></span>
                        <span>Online</span>
                    </a>
                </div>
            </div>
            <form className='sidebar-form'>
                <div>
                    <input type="text" className="input-search" placeholder="Search..." />
                    <span className="btn-search " >
                        <a href='#' role='button'><FaSearch /></a>
                    </span>
                </div>
            </form>
            <div className='header'>MAIN NAVIGATION</div>
            <ul className='sidebar-menu'>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><AiFillDashboard /></span>
                        <span className='title-item'>Dashboard</span>
                    </a>
                    <span><IoChevronBack /></span>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><VscFiles /></span>
                        <span className='title-item'>Layout Options</span>
                    </a>
                    <span className='label label-primary'>4</span>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><FaTh /></span>
                        <span className='title-item'>Widgets</span>
                    </a>
                    <span className='label label-success'>new</span>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><FaChartPie /></span>
                        <span className='title-item'>Charts</span>
                    </a>
                    <span><IoChevronBack /></span>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><MdComputer /></span>
                        <span className='title-item'>UI Elements</span>
                    </a>
                    <span><IoChevronBack /></span>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><FaEdit /></span>
                        <span className='title-item'>Forms</span>
                    </a>
                    <span><IoChevronBack /></span>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><BsTable /></span>
                        <span className='title-item'>Tables</span>
                    </a>
                    <span><IoChevronBack /></span>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><FaCalendarAlt /></span>
                        <span className='title-item'>Calender</span>
                    </a>
                    <div>
                        <span className='label label-primary'>17</span>
                        <span className='label label-danger'>3</span>
                    </div>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><HiOutlineMail /></span>
                        <span className='title-item'>Mailbox</span>
                    </a>
                    <div>
                        <span className='label label-danger'>5</span>
                        <span className='label label-success'>16</span>
                        <span className='label label-warning'>12</span>
                    </div>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><FaFolder /></span>
                        <span className='title-item'>Examples</span>
                    </a>
                    <span><IoChevronBack /></span>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <span className='icon-left'><RiShareForwardFill /></span>
                        <span className='title-item'>Multilevel</span>
                    </a>
                    <span><IoChevronBack /></span>
                </li>
                <li className='treeview'>
                    <a href='#'>
                        <FaBook />
                        <span className='title-item'>Documentation</span>
                    </a>
                </li>
            </ul>
        </section>
    )
}

