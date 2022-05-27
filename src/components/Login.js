import { useEffect, useState } from "react"
import jwt_decode from "jwt-decode";
import axios from 'axios'
import Signup from "./Signup";
import { getUserById } from "../routes/userRoutes";

const Login = ({user, setUser}) => {
  const [gsiLoaded, setGsiLoaded] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [googleUser, setGoogleUser] = useState(null)
  
  //necessary to make google button appear when gsi is loaded from html
  useEffect(()=>{
    document.getElementById("gsiscript").onload = () => setGsiLoaded(true)
  },[])

  useEffect(()=>{
    if(user) return
    const handleLogin = (res) =>{
      //login to backend with google credentials (res.credential.sub for unique google id)
      //following function mimics the process as this is just a front-end example
      const credential = jwt_decode(res.credential)
      //mimics search of if user with unique google id exists
      if(getUserById(credential.sub)) {
        setUser(getUserById(credential.sub))
        axios.defaults.headers.common['authetication'] = JSON.stringify(credential).slice(1,-1)
      } 
      else {
        setShowSignup(true)
        setGoogleUser(credential)
      }
    }

    const initGsi = () => {
      if(!window.google) return
      window.google.accounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLEID,
        callback: (res) => handleLogin(res)
      })
      window.google.accounts.id.renderButton(
        document.getElementById("googlebutton"),
        { theme: "filled_black", size: "medium" } 
      );
    }
    initGsi()
  },[gsiLoaded, user, setUser])

  return(
    showSignup ? 
      <Signup googleUser={googleUser} setUser={setUser} /> :
      <div className="inner-box-element" id="googlebutton"/>
  )
}

export default Login