import React from 'react'
import { Link } from 'react-router-dom'
import Style from './Home.module.scss'
import {useAuth} from '../../use-auth-hook'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/cartSlice'
import axios from 'axios'

const HomeProducts = ({title,imgUrl,description,price,id,admin,deletePost}) => {
  const {isAuth} = useAuth()
  const dispatch = useDispatch()
  const toCart = () => {
    const item = {
      id:id,
      title: title,
      imgUrl: imgUrl,
      price:price,
      description: description
    }

    dispatch(addCart(item))
  }
  

  return (
    <div>
        <div className={Style.products_block}>
            <img src={imgUrl} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={Style.AddCart}>
              <div>
                  <b>${price}</b>
              </div>
              <div>
                {
                 !isAuth ?
                  (
                    <Link to='/login'>Add cart </Link>
                  ):
                  (
                    <button onClick={toCart}>Add cart </button>

                  )
                }
                <div>

                 { 
                 admin ? (
                    <>
                      <button onClick={deletePost}>delete</button>
                    </>
                  ):
                  null
                }
                </div>
                  
              </div>
            </div>
        </div>
    </div>
  )
}

export default HomeProducts