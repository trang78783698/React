import React from 'react'
import {AiFillDashboard, AiOutlineRight} from 'react-icons/ai';
import './HeaderContent.scss'
export default function HeaderContent() {
    return (
        <div className='content-header'>
           <div className='title-header'>
               Data Tables
               <small className='advance-tables'>advanced tables</small>
           </div>
           <div className='breadcrumb-nav'>
                    <span className='icon-left'><AiFillDashboard /></span>
                    <span className='tilte'>Home</span>
                    <span className='icon-right'><AiOutlineRight /></span>
                    <span className='tilte'>Tables</span>
                    <span className='icon-right'><AiOutlineRight /></span>
                    <span className='text-light'>Data tables</span>
           </div>
        </div>
    )
}

