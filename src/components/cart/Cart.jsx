import React from 'react'
import { useSelector } from 'react-redux'
import Style from './Cart.module.scss'
import CartProduct from './CartProduct'

const Cart = () => {
    const {items} = useSelector(state => state.cart)
  return (
    <div>
        <div className="container">
        <div className={Style.AddCart}>
                {!items.length ? <h1 className={Style.h1Position}>cart is empty</h1>:
                    items.map((item) => {
                        return (
                            <CartProduct key={item.id} {...item}/>
                        )
                    })
                }
        </div>
        </div>
        
    </div>
  )
}

export default Cart