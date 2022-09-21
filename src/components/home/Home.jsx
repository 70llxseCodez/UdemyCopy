import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HomeProducts from './HomeProducts'
import Style from './Home.module.scss'

const Home = ({value,admin,setAdmin}) => {

  const [products,setProducts] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:3001/lessons?${value && `title=${value}`}`)
    .then((res) => {
        setProducts(res.data)
    })
  },[value])

  const deletePost = (id) => {
    axios.delete(`http://localhost:3001/lessons/${id}`)
    .then(() => console.log('deleted'))
  }
  return (
    <div>
      <div className="container">
        <div>
          <h1>What to learn next</h1>
        </div>
            <div className={Style.Products}>
               {
                  products.map((item) => {
                    return (
                      <HomeProducts deletePost={() => deletePost(item.id)} admin={admin} key={item.id} {...item}/>
                    )
                  })
               }
            </div>
      </div>
    </div>
  )
}

export default Home