import React from "react";
import { UserAuth } from "./Google";
import {GoogleButton} from 'react-google-button'
import './SignIn.css'

const Signin = () => {

    const {googleSignIn} = UserAuth();
    const handleGoogleSignIn = async () => {
      try {
        await googleSignIn();
      } catch (error) {
        console.log (error)
      }
    }
    return (
            <GoogleButton onClick={handleGoogleSignIn} className='btnGoogle'>Ingresar</GoogleButton> 

    )
}

export default Signin;