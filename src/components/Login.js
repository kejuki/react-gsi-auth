import { useContext, useEffect, useState } from "react"
import jwt_decode from "jwt-decode";
import axios from 'axios'
import Signup from "./Signup";
import { getUserById } from "../routes/userRoutes";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [gsiLoaded, setGsiLoaded] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [googleUser, setGoogleUser] = useState(null)
  const {user, setUser} = useContext(UserContext)

  //necessary to make google button appear when gsi is loaded from html document
  useEffect(()=>{document.getElementById("gsiscript").onload = () => setGsiLoaded(true)},[])

  useEffect(()=>{
    if(user) return
    const handleLogin = (res) =>{
      //login to backend with google credentials (res.credential.sub for unique google id)
      const credential = jwt_decode(res.credential)
      if(getUserById(credential.sub)) {
        const currentUser = getUserById(credential.sub)
        setUser(currentUser)
        localStorage.setItem("currentUser", JSON.stringify(currentUser))
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
      <Signup googleUser={googleUser} /> :
      <div className="inner-box-element" id="googlebutton"/>
  )
}

export default Login