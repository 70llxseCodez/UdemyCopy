import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Style from './Admin.module.scss'

const Admin = ({admin,setAdmin}) => {

    let navigate = useNavigate()

    const createPost = (e) => {
        axios.post('http://localhost:3001/lessons',{
            id: Date.now(),
            imgUrl: e.target[0].value,
            title: e.target[1].value,
            description: e.target[2].value,
            price: e.target[3].value
        })
    }

    useEffect(()=>{
        if(!admin){
            navigate('/login')
        }
    },[])
  return (
    <div>
        <form onSubmit={createPost}>
            <input type="text" placeholder='img url'/>
            <input type="text" placeholder='title'/>
            <input type="text"placeholder='description'/>
            <input type="text" placeholder='price'/>
            <button type='submit'>create lessons</button>
        </form>
    </div>
  )
}

export default Admin