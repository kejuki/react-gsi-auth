export const loginUser = async (googleUser) => {
  return await fetch("http://localhost:3001/api/authenticate/",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({googleUser})
  })
  .then((res) => res.json())
  .catch((err) => { console.error("Error: ", err);});
}

export const signupUser = async (googleUser, username) => {
  return await fetch("http://localhost:3001/api/authenticate/signup/",{
    method: 'POST',
    headers: {
      'Accept': 'application/json',
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