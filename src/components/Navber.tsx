"use client"
import React from 'react'
import Link from 'next/link'
import { NavLink } from "react-router-dom";
//  import Contact from '@/components/Contact'
import Home from '../app/page';
//  import Userlist from '@/app/user/[userid]/users/Userlist';
import Userlist from '@/app/user/page';
import { user } from '../utils/db';
// import Cont from '
const Navber = () => {
  return (
    <div className='text-2xl font-extrabold flex h-14 bg-gradient-to-r from-cyan-500 to-blue-500 gap-5 justify-center'>
        <ul>   
            {/* <NavLink> */}
                 <Link href='/user'>Userlist</Link> 
        </ul>
        <ul>
        <Link href='/Add'>add</Link> 
</ul>
{/* <ul> */}
    {/* <a> */}
        {/* Contact */}
    {/* </a> */}
{/* </ul> */}
{/* </span> */}
    </div>
  )
}

export default Navber