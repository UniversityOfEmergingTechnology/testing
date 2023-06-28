import React , {useState} from 'react'

const AddTodos = ({onAdd}) => {
    const [input , setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        onAdd(input)
        setInput('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text"  data-testid = "add-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
         />
         <button type="submit">Add Todo</button>
    </form>
  )
}

export default AddTodos