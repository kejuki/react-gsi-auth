import { useEffect, useState } from "react";
import Login from "./components/Login"
import Logout from "./components/Logout";
import {initBackendMimic} from "./routes/userRoutes"

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("currentUser")))

  //makes localstorage object for all google accounts youll make testApp users with 
  //to mimic account creation on backend
  initBackendMimic()
  
  useEffect(()=>{
    localStorage.setItem("currentUser", JSON.stringify(user))
  },[user])

  return (
    <div className="App">
      <div id="inner-box">
        <div className="inner-box-element">
          <h1>Google login example</h1>
          <h3>Login with google account and signup to the site with it if its the 1st time logging in.</h3>
        </div>
        <div className="inner-box-element">logged in user: {user?.username} </div>
        {
          !user ? 
          <Login 
            user={user}
            setUser={setUser}
          /> :
          <Logout 
            setUser={setUser}
          />
        }
      </div>
    </div>
  );
}

export default App;
