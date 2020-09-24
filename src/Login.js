import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Login.css'

function Login() {
    return (
        <div  className={classes.login}>
            <Link to="/">
              <img className={classes.login__logo} src='https://tse4.mm.bing.net/th?id=OIP.o-I-KZy0OcN_-4pJH7OgSQHaC4&pid=Api&P=0&w=430&h=168' alt="logo">

              </img>
            </Link>
            <div className={classes.login__container}>
                <h1>Sign-in</h1>
                <form className={classes.login__form}>
                    <h4><strong>E-mail</strong></h4>
                    <input type='text'/>
                    <h4><strong>Password</strong></h4>
                    <input type='password'/>

                    <button className={classes.login__signButton}
                    >Sign-in</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE 
                    CLONE Conditions of Use & Sale.Please see our Privacy
                     Notice,our Cookies Notice and our Interest-Based AdsNotice
                </p>
                <button className={classes.login__registerButton}>Create your Amazon account</button>

            </div>
        </div>
    )
}

export default Login
