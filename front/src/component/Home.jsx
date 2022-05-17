import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { allUser } from '../common/redux/userSlice'



const Home = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
   
    const [state,setState]=useState()


    useEffect( ()=>{
        
    (async ()=>{
        
        try {
            console.log("hello")
          const url = 'http://localhost:8000/api/users'
         
        
          const response = await axios.get(url)
         
          console.log(response.data.users) 
          setState(response.data.users)
         
          
        } catch (err) {
          console.log(err.response)
        }
    })()
      
    },[])

    const submit=()=>{
        dispatch(allUser(state))
        navigate('/users')

    }
  return (
    <div className='home'>
        <button onClick={submit}>click here to get all users</button>
        <div><h1>hooks used</h1></div>
        <ul>
            <li>useEffect</li>
            <li>useNavigate</li>
            <li>useDispatch</li>
            <li>useSelector</li>
            <li>useState</li>
        </ul>
    </div>
  )
}

export default Home