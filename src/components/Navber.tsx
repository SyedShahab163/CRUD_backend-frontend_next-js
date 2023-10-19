"use client"
import React from 'react'
import Link from 'next/link'
import { NavLink } from "react-router-dom";
 import Contact from '@/components/Contact'
import Home from '../app/page';
// import Userlist from '@/app/user/[userid]/users/Userlist';

const Navber = () => {
  return (
    <div className='text-2xl font-extrabold flex h-14 bg-gradient-to-r from-cyan-500 to-blue-500 gap-5 justify-center'>
        <ul>   
            {/* <NavLink> */}
                 <Link href='/shah'>Contact</Link> 

              {/* <li> */}
                {/* <a href='/shah'>Contact</a> */}
              {/* </li> */}
        </ul>
        <ul>
    <a>
        About
    </a>
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