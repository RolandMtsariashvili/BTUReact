import React, { useState } from 'react';
import useGetClassName from '../../hooks/useGetClassName';
import './AddTodo.css'

export const AddTodo = ({
  addTodo,
}) => {
  const getClassName = useGetClassName(AddTodo.displayName);

  const [ todoNameValue, setTodoNameValue ] = useState('');

  const onSaveTodo = () => {
    addTodo(todoNameValue)
    setTodoNameValue('');
  }

  return (
    <>
      <input
        value={todoNameValue}
        type="text"
        placeholder="enter todo name"
        onChange={(e) => setTodoNameValue(e.target.value)}
      />
      <button onClick={onSaveTodo}>Add todo</button>
    </>
  )
}


AddTodo.displayName = "AddTodo";