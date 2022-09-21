import React from 'react'
import Style from './Header.module.scss'
import udemy from '../../../src/image/udemy.svg'
import search from '../../../src/image/search.png'
import cart from '../../../src/image/cart.png'
import { useAuth } from '../../use-auth-hook'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase'
import { Link, useNavigate } from 'react-router-dom'
import { signOuts } from '../../redux/userSlice'
import { useDispatch } from 'react-redux'

const Header = ({value,setValue,admin,setAdmin}) => {
  
  let navigate = useNavigate()
  const dispatch = useDispatch()
  const signout = () => {
    signOut(auth)
    .then(()=> {
      console.log('success')
      navigate('/login')
      dispatch(signOuts())
      setAdmin(false)
  })

    .catch((err) => console.log(err))
  }

  const {isAuth} = useAuth()
  return (
    <div>
        <div className={Style.Header}>
            <Link style={{borderBottom:'0px'}} to={'/'} className={Style.logo}>
                <img src={udemy} alt="" />
            </Link>
            <div className={Style.Input}>
              <img className={Style.search} src={search} alt="" />
                <input value={value} onChange={e => setValue(e.target.value)} type="text" placeholder='искать что-нибудь'/>
            </div>
            <div className={Style.cart}>
              <Link to={'/cart'}><img src={cart} alt="" /></Link> 
            </div>
          
            {isAuth ?
            (
             
              ( <div className={Style.secondButton}>
                <button onClick={signout}>
                  Sign Out
                </button>
              </div>
             )
            ):
            <>
            <div className={Style.firstButton}>
            <Link to={'/login'}>
                войти
            </Link>
          </div>
          <div className={Style.secondButton}>
            <Link to={'/signup'}>
                Регистрация
            </Link>
          </div>
            </>
            }
            {
              admin ?(

                  <Link to={'/admin'}>Admin</Link>

              ): null
            }
            
        </div>
    </div>
  )
}

export default Header