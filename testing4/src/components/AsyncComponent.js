import React , {useState , useEffect} from 'react'

const AsyncComponent = () => {
    const [data , setData] = useState(null)
    const fetchData = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        const json = await response.json()
        setData(json)
    }
    useEffect(() => {
        fetchData()
    },[])
  return (
    <>
        {data ? (<div data-testid = "data">{data.title}</div>) 
        : (<div data-testid = "loading">Loading...</div>)}
    </>
  )
}

export default AsyncComponent