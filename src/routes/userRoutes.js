export const loginUser = async (googleUser) => {
  return await fetch("http://localhost:3001/login",{
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({googleUser})
  })
  .then((res) => res.json())
  .catch((err) => { console.error("Error: ", err);});
}

export const signupUser = async (googleUser, username) => {
  return await fetch("http://localhost:3001/signup",{
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      googleUser,
      username,
    })
  })
  .then((res) => res.json())
  .catch((err) => { console.error("Error: ", err);});
}

export const logoutUser = async () => {
  await fetch("http://localhost:3001/logout",{
    method: 'GET',
    credentials: 'include'
  })
  .then(res => res.json())
  .catch((err) => { console.error("Error: ", err);});
}

export const auth = async () => {
  return await fetch("http://localhost:3001/auth",{
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  .then((res) => res.json())
  .catch((err) => { console.error("Error: ", err);});
}