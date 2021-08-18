import { Button } from '@material-ui/core';
import React from 'react';
import '../css/Login.css';

function Login() {

    const signIn =() => {

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"
                alt="facebook_iconLogo"
                />
                <img 
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt="facebook_logo"
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
