import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { login } from '../Slices/userSlice';
import './LoginPage.css'

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()

    const loginHandler = e => {
        e.preventDefault();

        if(email === "hruday@gmail.com" && password === "hruday123"){
        dispatch(login({
            email,
            password,
            isLoggedIn:true
        }))
    } else {
        alert("Invalid Crenetials!")
    }
    }

    return (
        <div className='form'>
            <form onSubmit={(e)=>loginHandler(e)}>
                <h1>Login Page</h1>
                <input type='email' placeholder='Enter Username' value={email} onChange={(e)=>setEmail(e.target.value)} required='required'/><br/>
                <input type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} required='required'/><br/>
                <button type='submit' className='button'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
