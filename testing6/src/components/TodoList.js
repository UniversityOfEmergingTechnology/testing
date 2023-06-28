import React,{useState} from 'react'
import AddTodos from './AddTodos'
import TodoItem from './TodoItem'
const TodoList = () => {
    const [todos , setTodos] = useState([])
    const addTodo = (todo) => {
        setTodos((prevTodos) => [...prevTodos , todo])
    }
    const removeTodo = (todo) => {
        setTodos((prevTodos) => prevTodos.filter((t) => t !== todo))
    }
  return (
    <div>
        <AddTodos onAdd ={addTodo}></AddTodos>
        {todos.map((todo ,index) => (
            <TodoItem key={index} todo={todo} onRemove={removeTodo}></TodoItem>
        ))}
    </div>
  )
}

export default TodoList