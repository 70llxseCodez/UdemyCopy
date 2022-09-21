import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../../firebase/firebase'
import Style from './SignUp.module.scss'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addUser } from '../../redux/userSlice'

const Register = () => {

  const [pass,setPass] = useState('')
  const [email,setEmail] = useState('')
  const [fullName,setFullName] = useState('')
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const createAccount = () => {
    if(!email || !pass){
      alert("email or password should not be empty")
    }
    createUserWithEmailAndPassword(auth,email,pass)
      .then(({user})=> 
      dispatch(addUser({
        id: user.uid,
        email: user.email,
        token: user.stsTokenManager.accessToken
      })),
      console.log('succeess'),
      navigate('/'),
      setEmail(''),
      setPass(''),
      setFullName('')
      )
      .catch((err)=> console.log(err))
  }

  const enter = (e) => {
    if(e.key === 'Enter'){
      createAccount()
    }
  }



  return (
    <div className="container">
          <div className={Style.form_block}>
            <div className={Style.form}>
            <h2><b>Sign up and start learning</b></h2>
                <input type="text"value={fullName} placeholder='Full name' onChange={e => setFullName(e.target.value)}/>
                <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder='Password' value={pass} onChange={e => setPass(e.target.value)}/>
                <button onKeyDown={enter} onClick={createAccount}>Sign Up</button>

               

                <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
            </div>
           
        </div>
    </div>
  )
}

export default Register