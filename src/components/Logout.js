import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'
import { logoutUser } from '../routes/userRoutes'

const Logout = () => {
  const { setUser } = useContext(UserContext)

  const logout = async () => {
    setUser(await logoutUser())
  }

  return <button className="logout-button" onClick={() => logout()}>Logout</button>
}

export default Logout