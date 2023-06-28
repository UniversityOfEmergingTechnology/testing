import React,{useState ,useEffect} from 'react'

const LocalStorageComponent = () => {
    const [storageValue , setStorageValue] = useState('')

    useEffect(() => {
        const value = localStorage.getItem('key') || ''
        setStorageValue(value)
    },[])
  return (
    <div>{storageValue}</div>
    
  )
}

export default LocalStorageComponent