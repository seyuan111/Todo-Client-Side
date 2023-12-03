"use client"
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import { BiArrowBack } from 'react-icons/bi';
import NavBar from '../../components/NavBar'
import { useRouter } from 'next/navigation'

const UpdateTodo = () => {

    const router = useRouter();
    const id = router.query;

    const [post, setPost] = useState({
        tasks: "",
        description: "",
        date: ""
      })

    const goBack = () => {
        router.back();
      };

      useEffect(() => {
        if (id) {
          axios.get(`http://localhost:4500/posts/${id}`)
            .then((res) => {
              setPost({...post, [e.target.name]: e.target.value})
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }, [id]);

      const handleSubmit = async (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4500/posts/${id}`, post)
        .then((res) => {
          router.push("/ListOfTodo")
        })
        .catch((error) => {
          console.error(error);
        });
      };
    
  return (
    <div>
    <NavBar />
    <BiArrowBack onClick={goBack} className="text-black cursor-pointer text-[20px] my-6" />
    <h1 className="font-bold text-xl mt-4">Update Post:</h1>
    <div className="mt-4">
      <form className="flex flex-col" onSubmit={handleSubmit}>

        <label className="my-4 text-xl font-bold">Tasks:</label>
        <input className="border-2" type="text" name="tasks" placeholder="tasks" onChange={(e) => setPost({ ...post, tasks: e.target.value })} required/>

        <label className="my-4 text-xl font-bold">Description:</label>
        <input className="border-2" type="text" name="description" placeholder="description" onChange={(e) => setPost({ ...post, tasks: e.target.value })} required/>
        
        <label className="my-4 text-xl font-bold">Date:</label>
        <input className="border-2" type="text" name="date" placeholder="date" onChange={(e) => setPost({ ...post, tasks: e.target.value })}/>

      </form>
      <button className="rounded mt-4 mb-6 bg-blue-500 text-white px-4 py-2" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  </div>
  )
}

export default UpdateTodo