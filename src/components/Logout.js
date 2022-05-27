import axios from 'axios'

const Logout = ({setUser}) => {

  const logout = () => {
    axios.defaults.headers.common['authetication'] = null
    setUser(null)
  }

  return <button className="logout-button" onClick={() => logout()}>Logout</button>
}

export default Logout