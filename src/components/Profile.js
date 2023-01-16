import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

const Profile = () => {
  const { user, setUser } = useContext(UserContext)

  return (
  <div id='profile'>
    <h2 id='username'>{user?.user?.username}</h2>
    <img id='avatar' alt='avatar' src={user?.user?.avatar}></img>
  </div>
  )
}

export default Profile