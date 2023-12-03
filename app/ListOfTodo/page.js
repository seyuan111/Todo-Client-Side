"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import NavBar from '../components/NavBar'
import { useRouter } from 'next/navigation'

const ListOfTodo = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
          const res = await axios.get(`http://localhost:4500/posts/`)
          const sortedPosts = res.data.sort((a, b) => a.tasks.localeCompare(b.tasks));
          setPosts(sortedPosts);
        }
        fetchPosts()
      },[])

      const handleDelete = async (id) => {
        try{
          await axios.delete(`http://localhost:4500/posts/${id}`) //remove item from DB
          setPosts(posts.filter((post) => post._id !== id)) //remove item from state
        } catch(error){
          console.log(`There is an issue deleteing this post`, error)
        }
      }

  return (
    <div>
    <NavBar />
    <div className="mt-4 justify-center items-center mx-auto gap-4">
      <h1 className="text-2xl font-bold mb-6">My Todo List:</h1>
      {posts.map((post) => (
        <div className="mb-4" key={post._id}>
            <div className="bg-blue-600 text-white p-4 items-center flex flex-col grid-col-3">
              <h1 className="font-Caprasimo my-4 text-xl font-bold">Tasks: {post.tasks}</h1>
              <p className="my-4 text-xl font-Quicksand">Description: {post.description}</p>
              <p className="my-4 text-xl">Date: {post.date}</p>
                <div className="flex mb-6">
                    <Link href={`/UpdateTodo/${post._id}`} className="duration-300 bg-green-600 hover:bg-green-900 text-white mr-6 px-[8px] py-[4px] justify-center items-center rounded">Edit</Link>
                    <button className="px-4 py-2 rounded mr-4 duration-300 hover:bg-red-900 bg-red-500 text-white" onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
            </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default ListOfTodo