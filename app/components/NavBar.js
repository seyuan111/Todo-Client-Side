"use client"
import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import 'tailwindcss/tailwind.css';

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
        <div className="w-full h-[70px] bg-gradient-to-r from-cyan-600 to-blue-500 py-10 z-10">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
          <div className="text-[#803100] font-Cinzel text-2xl font-bold cursor-pointer">
              <h1><Link href='/'>Todo List</Link></h1>
          </div>
          <div className="hidden md:flex">
            <ul className="flex font-Cinzel text-white font-bold items-center text-xl">
                <li className="ml-4 cursor-pointer"><Link href="/ListOfTodo">My List</Link></li>
                  <li className="ml-4 cursor-pointer"><Link href="/NewTodo">Add Todo</Link></li>
                  <button className="ml-4 cursor-pointer"><Link href="/Login">Login</Link></button>
            </ul>
        </div>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={30} className="text-black"/> : <AiOutlineMenu size={30} className="text-black"/>}
            </div>
            <div className={nav ? "duration-300 pb-4 w-full bg-gradient-to-r bg-gray-400 absolute top-[70px] left-0 text-center justify-center flex" : "absolute left-[-100%]"}>
            <ul className="text-white font-Cinzel font-bold">
            <li className="ml-4 mb-4 cursor-pointer"><Link href="/ListOfTodo">My List</Link></li>
            <li className="ml-4 mb-4 cursor-pointer"><Link href="/NewTodo">Add Post</Link></li>
            <button className="ml-4 cursor-pointer"><Link href="/Login">Login</Link></button>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default NavBar