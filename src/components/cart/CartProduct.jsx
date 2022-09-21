import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart } from '../../redux/cartSlice'
import Style from './Cart.module.scss'

const CartProduct = ({imgUrl,title,description,price,id}) => {
    const dispatch = useDispatch()
    const {items} = useSelector(state => state.cart)
  return (
    <div className={Style.Carts}>
        

         <img src={imgUrl} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
            <div>
                <div>
                    <b>{price}</b>
                </div>
                <div>
                    <button onClick={() => dispatch(deleteCart(id))}>
                        delete
                    </button>
                </div>
            </div>
        

    </div>
  )
}

export default CartProduct