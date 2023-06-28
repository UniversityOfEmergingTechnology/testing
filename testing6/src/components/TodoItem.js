import React from 'react'

const TodoItem = ({todo , onRemove}) => {
  return (
    <div>
        {todo}
        <button onClick={() => onRemove(todo)}>Remove</button>
    </div>
  )
}

export default TodoItem