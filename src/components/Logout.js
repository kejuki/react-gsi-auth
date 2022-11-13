import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Logout = () => {
  const { setUser } = useContext(UserContext)

  const logout = () => {
    setUser(null)
  }

  return <button className="logout-button" onClick={() => logout()}>Logout</button>
}

export default Logout