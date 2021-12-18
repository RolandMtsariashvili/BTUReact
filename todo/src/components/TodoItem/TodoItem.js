import React, { useState } from 'react';
import './TodoItem.css';

export const TodoItem = ({
  todoItem,
  index,
  editTodoItem,
  deleteTodoItem,
  moveTodoUp,
  setDone,
}) => {
  const [ isEditMode, setEditMode ] = useState(false);
  const [ todoItemNewName, setTodoItemNewName ] = useState(todoItem.name);

  const onEditSave = () => {
    editTodoItem(index, todoItemNewName)
  }

  const onIsDoneChange = (event) => {
    setDone(index, event.target.checked)
  }

  return (
    <li className='todoItem'>
      <span className={todoItem.isDone ? 'done' : ''}>{todoItem.name}</span>
      <button onClick={() => deleteTodoItem(index)}>Delete</button>
      <button onClick={() => setEditMode(true)}>Edit</button>
      <button onClick={() => moveTodoUp(index)}>up</button>
      <label htmlFor="isDone">
            <span>is done</span>
            <input
              type="checkbox"
              name="isDone"
              id="isDone"
              checked={todoItem.isDone}
              onChange={onIsDoneChange}
            />
          </label>
      {isEditMode ? (
        <div>
          <input
            type="text"
            value={todoItemNewName}
            onChange={(e) => setTodoItemNewName(e.target.value)}
          />
          <button onClick={onEditSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Done</button>
        </div>
      ): null}
    </li>
  )
}