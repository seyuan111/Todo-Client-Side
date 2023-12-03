'use client'
import React, {useState} from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className="w-full h-screen top-[90px] bg-slate-400/60">
    
    <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-4 text-white">
        <h1 className="font-bold text-2xl underline">My Todo List</h1>
        <p className="mb-5 font-bold">Create your own todo</p>
        <div className="text-white flex flex-col sm:flex-row">
            <button className="bg-blue-500 text-white hover:bg-blue-900 rounded px-6 py-2 duration-300"><Link href="/NewTodo">Add Tasks</Link></button>
            <button className="px-6 py-2 mt-4 bg-red-500 hover:bg-red-900 rounded text-white duration-300 ml-6"><Link href="/ListOfTodo">View Tasks</Link></button>
        </div>
    </div>

</div>
  )
}

export default Hero