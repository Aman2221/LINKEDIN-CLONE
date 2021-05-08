import React, { useState } from 'react'
import { auth, provider } from '../../firebase'
import { useStateValue } from '../../StateProvider'
import  Linkedin_Logo  from '../img/Linkedin_Logo.png'
import  link_black from '../img/link_black.png'
import  google  from '../img/google.png'
import '../styles/Login.css'

const Login_signup = () => {

    const [{user}, dispatch] = useStateValue();
    const [text, setText] = useState('Sign in');
    const [Btntext, setBtnText] = useState(true);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    const changeText = () => {
        setBtnText(false);
    }
    const handleGLogin = () => {
     auth.signInWithPopup(provider).then((result) => {
        dispatch({
          type : 'SET_USER',
          user : result.user
        })
        alert('Login Successful');
     }).catch((e) => 
        setError(e.message)
     )
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(email,password).then((res) => {
            dispatch({
                type : 'SET_USER',
                user : res.user
            })
        }).catch((e) => setError(e.message))
    }

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(email,password).then((res) => {
            dispatch({
                type : 'SET_USER',
                user : res.user
            })
        }).catch((e) => setError(e.message))
    }
    return (
        <div className='loginSignupContainer'>
            <img src={Linkedin_Logo} alt="Linkedin" />
            <h1>Make the most of your professional life</h1>
            <div className="subLoginDiv">
                <p>Email or Phone</p>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>

                <p>Password (6 or more characters)</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                <small><span id="error">{error}</span><br/>By clicking Agree & Join, you agree to the LinkedIn <span>User Agreement, Privacy Policy,</span> and <span> Cookie Policy</span>.</small>
                <button id='agreeBtn'>
                    {Btntext ? (<p onClick={handleSignUp}>Agree & Join</p>) : (
                        <p onClick={handleLogin}>Sign in</p>
                    )}
                </button>
                <p id='or'>or</p>
                <button id='googleLoginBtn'>
                    <div id='googleDiv' onClick={handleGLogin}>
                        <img src={google} alt="google" />&nbsp;&nbsp;&nbsp;
                        <p>Join with Google</p>
                    </div>
                </button>
                <h5>Already on Linkedin? <span onClick={changeText}>{text}</span></h5>
            </div>
            <footer className='footer' id='footer'>
                <img src={link_black} alt="Linkedin" />
                <h6>© 2020</h6>
                <h6>About</h6>
                <h6>Accessibility</h6>
                <h6>User Agreement</h6>
                <h6>Privacy Policy</h6>
                <h6>Cookie Policy</h6>
                <h6>Brand Policy</h6>
                <h6>Guest Controls</h6>
                <h6>Community Guidelines</h6>
                <h6>Languages&nbsp;<i className="fas fa-chevron-down"></i></h6>
            </footer>
        </div>
    )
}

export default Login_signup
