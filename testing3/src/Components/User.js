import React,{useEffect,useState} from 'react'

const User = ({userId}) => {
    const [user,setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    useEffect(() => {
        const fetchUser = async() => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            const data = await response.json()
            setUser(data)
            setLoading(false)
        }
        fetchUser()
    },[userId])
    
  return (
    <>
        {loading ?  (<div>Loading...</div>) : (<div>{user.name}</div>)}
    </>
  )
}

export default User