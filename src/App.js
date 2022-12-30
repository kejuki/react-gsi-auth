import { useState } from "react";
import Login from "./components/Login"
import Logout from "./components/Logout";
import { UserContext } from "./contexts/UserContext";

function App() {
  const [user, setUser] = useState(null)

  //renders google login button if user has not logged in
  //renders sign up form if google user has not logged in previously
  //renders users username and logout button if user has logged in

  return (
    <div className="App">
      <div id="inner-box">
        <UserContext.Provider value={{user, setUser}}>
          <div className="inner-box-element">
            <h1>Google login example</h1>
            <h3>Login with google account and signup to the site with it if its the 1st time logging in.</h3>
          </div>
          <div className="inner-box-element">logged in user: {user?.username} </div>
          {
            !user ? 
            <Login/> :
            <Logout />
          }
        </UserContext.Provider>
      </div>
    </div>
  );
}

export default App;
