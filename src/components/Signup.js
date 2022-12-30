import { useContext, useState } from "react"
import { UserContext } from "../contexts/UserContext"
import { signupUser } from "../routes/userRoutes"

const Signup = ({googleResponse}) => {
  const [username, setUsername] = useState("")
  const { setUser } = useContext(UserContext)

  const createAccount = async (_username) => {
    if(_username && !/ /g.test(_username)){
      setUser(await signupUser(googleResponse, _username))
    }
  }

  return(
    <>
      <p>Insert username and press enter</p>
      <input
      autoFocus
      type='text'
      className="signup-text"
      value={username}
      onKeyUp={(e)=> {if(e.key === 'Enter') createAccount(username)}}
      onChange={e => setUsername(e.target.value)}
      />
    </>
  )
}

export default Signup
