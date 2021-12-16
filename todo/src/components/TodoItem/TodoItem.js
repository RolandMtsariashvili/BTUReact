import React, { useState } from 'react';
import useGetClassName from '../../hooks/useGetClassName';

import './TodoItem.css';

export const TodoItem = ({
  todoItem,
  index,
  editTodoItem,
  deleteTodoItem,
}) => {
  const getClassName = useGetClassName(todoItem.displayName);

  const [ isEditMode, setEditMode ] = useState(false);
  const [ todoItemNewName, setTodoItemNewName ] = useState(todoItem.name);
  const [ isDone, setIsDone ] = useState(todoItem.isDone);

  const onEditSave = () => {
    editTodoItem(index, todoItemNewName, isDone)
    setEditMode(false);
  }

  return (
    <li>
      <span>{todoItem.name}</span>
      <button onClick={() => deleteTodoItem(index)}>Delete</button>
      <button onClick={() => !isEditMode && setEditMode(true)}>Edit</button>
      {isEditMode ? (
        <div>
          <label htmlFor="isDone">
            <span>is done</span>
            <input
              type="checkbox"
              name="isDone"
              id="isDone"
              checked={isDone}
              onChange={(e) => setIsDone(e.target.checked)}
            />
          </label>
          <input
            type="text"
            value={todoItemNewName}
            onChange={(e) => setTodoItemNewName(e.target.value)}
          />
          <button onClick={onEditSave}>Save</button>
        </div>
      ): null}
    </li>
  )
}

TodoItem.displayName = "TodoItem";