import React, { useState } from 'react';
import './AddTodo.css'

export const AddTodo = ({
  addTodo,
}) => {
  const [ todoNameValue, setTodoNameValue ] = useState('');

  const onSaveTodo = () => {
    addTodo(todoNameValue)
    setTodoNameValue('');
  }

  return (
    <>
    <div className="addTodo"></div>
      <input
        className='addTodoInput'
        value={todoNameValue}
        type="text"
        placeholder="enter todo name"
        onChange={(e) => setTodoNameValue(e.target.value)}
      />
      <div>
        <button onClick={onSaveTodo} className="addTodoButton">Add todo</button>
      </div>
    </>
  )
}


AddTodo.displayName = "AddTodo";