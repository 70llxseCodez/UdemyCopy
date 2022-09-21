import React, { useState } from 'react'
import Style from './SignUp.module.scss'
import imgEmail from '../../../src/image/email.png'
import Locked from '../../../src/image/locked.png'
import { Link, useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../firebase/firebase'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/userSlice'


const Login = ({admin,setAdmin}) => {
  let navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [pass,setPass] = useState('')
  const dispatch = useDispatch()

  const signIn = () => {
    if(email === 'admin123@gmail.com' && pass === 'admin123'){
      setAdmin(!admin)
    }else{
      setAdmin(false)
    }
    signInWithEmailAndPassword(auth,email,pass)
    .then(({user})=> {
      dispatch(addUser({
        id: user.uid,
        email: user.email,
        token: user.stsTokenManager.accessToken
      }),
      navigate('/'),
      setEmail(''),
      setPass(''),
      console.log('success')
    )})
    .catch((err) => {
      console.log(err);
      alert(err)
    })

  }


  return (
    <div>
      <div className="container">
        <div className={Style.form_block}>
        <div className={Style.form}>
        <p className={Style.paragraph}><b>Log in to your Udemy account</b></p>
          <div className={Style.Border}></div>
              <div className={Style.icon}>
                <img className={Style.emailIcon} src={imgEmail} alt=""/>
                <input className={Style.input1} value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder='Email'/>
                
              </div>
              <div className={Style.icon2}>
                <img className={Style.Locked} src={Locked} alt="" />
                <input className={Style.input2} value={pass} onChange={e => setPass(e.target.value)} type="password" placeholder='Password'/>
              </div>
              <button onClick={signIn}>Login</button>
              <p>Don't have an account? <Link to={'/signup'}>Sign Up</Link></p>
        </div>
        </div>      
      </div>
    </div>
  )
}

export default Login