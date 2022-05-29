//uses localstorage to mimic rest endpoints

export const initBackendMimic = () => {
  if(!localStorage.getItem("testAppUserDB"))
    localStorage.setItem("testAppUserDB", JSON.stringify({userArray : []}))
}

export const getAllUsers = () => {
  return JSON.parse(localStorage.getItem("testAppUserDB")).userArray
}

export const getUserById = (id) => {
  return JSON.parse(localStorage.getItem("testAppUserDB")).userArray.find(user => user.id === id)
}

export const createUser = (userObject) => {
  const googleUsers = JSON.parse(localStorage.getItem("testAppUserDB")).userArray
  const updatedGoogleUsers = [...googleUsers, userObject]
  localStorage.setItem("testAppUserDB", JSON.stringify({userArray : updatedGoogleUsers}))
}