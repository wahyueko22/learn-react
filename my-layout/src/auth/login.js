/* eslint-disable react/no-unescaped-entities */
import {  useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { logInWithEmailAndPassword, signInWithGoogle } from './firebase'
//import { useAuthState } from 'react-firebase-hooks/auth'
import './login.css'
import logo from '../notification.png';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
   // const [user, loading, error] = useAuthState(auth)
    const navigate = useNavigate()

    const handleClick = async () => {
        // Navigating to a different route
        await logInWithEmailAndPassword(email, password)
        console.log('loginnnn : ' + email)
        navigate('/home')
    }

    return (
        <>
        <img src={logo} className="App-logo" alt="logo" />
            <div className="login">
                
                <div className="login__container">
                    <input
                        type="text"
                        className="login__textBox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E-mail Address"
                    />
                    <input
                        type="password"
                        className="login__textBox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button className="login__btn" onClick={handleClick}>
                        Login
                    </button>
                    <button
                        className="login__btn login__google"
                        onClick={signInWithGoogle}
                    >
                        Login with Google
                    </button>
                    <div>
                        <Link to="/reset">Forgot Password</Link>
                    </div>
                    <div>
                        Don't have an account? <Link to="/register">Register</Link>{' '}
                        now.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
