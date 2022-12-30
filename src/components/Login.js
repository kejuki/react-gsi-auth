import { useContext, useEffect, useState } from "react"
import Signup from "./Signup";
import { loginUser } from "../routes/userRoutes";
import { UserContext } from "../contexts/UserContext";

const Login = () => {
  const [gsiLoaded, setGsiLoaded] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [googleResponse, setGoogleResponse] = useState(null)
  const {user, setUser} = useContext(UserContext)

  //necessary to make google button appear when gsi is loaded from html document
  useEffect(()=>{document.getElementById("gsiscript").onload = () => setGsiLoaded(true)},[])

  useEffect(()=>{
    if(user) return
    const handleLogin = async (res) =>{
      setGoogleResponse(res)
      const currentUser = await loginUser(res)
      if(currentUser) {
        setUser(currentUser)
      }
      else{
        setShowSignup(true)
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
  },[gsiLoaded, user, setUser, googleResponse])

  return(
    showSignup ? 
      <Signup googleResponse={googleResponse} /> :
      <div className="inner-box-element" id="googlebutton"/>
  )
}
export default Login