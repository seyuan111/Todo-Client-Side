"use client"
import React, {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import NavBar from '../components/NavBar'
import { useRouter } from 'next/navigation'


const NewTodo = () => {

    const [post, setPost] = useState({
        tasks: "",
        description: "",
        date: ""
      })

    const router = useRouter();

    const handleChange = e => {
        setPost({...post, [e.target.name]: e.target.value}) //e.target.name = what they are typing while e.target.value is where they are typing
      }

    const handleSubmit = async e => {
        e.preventDefault() //send request html will refresh the page after you click submit and we dont want that to happen. We want to control how this form behaves.
        await axios.post('http://localhost:4500/posts', post) //I want to reach out to the backend server
        router.push("/ListOfTodo")
      }

  return (
    <div>
    <NavBar />
    <h1 className="font-bold text-xl mt-4">Add Post:</h1>
    <div className="mt-4">
      <form className="flex flex-col" onSubmit={handleSubmit}>

        <label className="my-4 text-xl font-bold">Tasks:</label>
        <input className="border-2" type="text" name="tasks" placeholder="tasks" onChange={handleChange} required/>

        <label className="my-4 text-xl font-bold">Description:</label>
        <input className="border-2" type="text" name="description" placeholder="description" onChange={handleChange} required/>
        
        <label className="my-4 text-xl font-bold">Date:</label>
        <input className="border-2" type="text" name="date" placeholder="date" onChange={handleChange}/>

      </form>
      <button className="rounded mt-4 mb-6 bg-blue-500 text-white px-4 py-2" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  </div>
  )
}

export default NewTodo